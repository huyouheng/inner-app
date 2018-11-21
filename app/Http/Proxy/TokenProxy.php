<?php
/**
 * Created by PhpStorm.
 * User: hyh
 * Date: 18-11-20
 * Time: 下午3:34
 */

namespace App\Http\Proxy;


use GuzzleHttp\Client;

class TokenProxy
{
    private $http;

    /**
     * TokenProxy constructor.
     * @param $http
     */
    public function __construct(Client $http)
    {
        $this->http = $http;
    }

    public function login($email, $password)
    {
        if (auth()->attempt(['email'=>$email,'password'=>$password])) {
            $user = auth()->user();
            if ($user->is_active == 0) {
                return response()->json([
                    'status'=>false,
                    'message' => '用户未验证邮箱...'
                ],400);
            }
            return $this->proxy('password', [
                'username' => $email,
                'password' => $password,
                'scope' => ''
            ]);
        }
        return response()->json([
            'status'=>false,
            'message' => '邮箱或密码错误...'
        ],401);
    }
    //退出
    public function logout()
    {
        //1 delete access_token
        //2 refresh token cancel auth
        $user = auth()->guard('api')->user();
        $accessToken = $user->token();

        app('db')->table('oauth_refresh_tokens')
            ->where('access_token_id',$accessToken->id)
            ->update([
                'revoked' => true
            ]);
        app('cookie')->forget('refresh_token');
        
        $accessToken->revoke();

        return response()->json([
            'status' => true,
            'message' => '成功退出'
        ],204);
    }

    public function refresh()
    {
        $refreshToken = request()->cookie('refresh_token');

        return $this->proxy('refresh_token',[
            'refresh_token' => $refreshToken
        ]);
    }
    private function proxy($grantType, array $data = [])
    {
        $data = array_merge($data, [
            'client_id' => env('PASSPORT_PRO_CLIENT_ID'),
            'client_secret' => env('PASSPORT_PRO_SECRET'),
            'grant_type' => $grantType,
        ]);

        $response = $this->http->post(env('APP_URL') . '/oauth/token', [
            'form_params' => $data
        ]);

        $token = json_decode((string)$response->getBody(), true);

        return response()->json([
            'token' => $token['access_token'],
            'auth_id' => md5($token['refresh_token']),
            'expires_in' => $token['expires_in']
        ])->cookie('refresh_token', $token['refresh_token'], 43200, null, null, false . true);
    }

}