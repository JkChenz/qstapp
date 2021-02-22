import http from '@/http/httpadapter';
import md5 from 'js-md5';

export const getCaptcha = () => {
	return http.get("blade-auth/oauth/captcha");
}

export const loginByUsername = (username, password, key, code) => {
	return http.post("/blade-auth/oauth/token",null, {
		header: {
			'Tenant-Id': '212522',
			'Captcha-Key': key,
			'Captcha-Code': code,
		},
		params: {
			tenantId: '212522',
			username,
			password: md5(password),
			grant_type: "password",
			scope: "all",
			type: "account"
		}
	})
};
