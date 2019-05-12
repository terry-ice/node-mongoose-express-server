import argv from "yargs";

exports.MONGODB = {
	uri: `mongodb://127.0.0.1:${argv.dbport || '27017'}/NodePress`,
	username: argv.db_username || 'DB_username',
	password: argv.db_password || 'DB_password'
}

exports.QINIU = {
	accessKey: argv.qn_accessKey || 'your access key',
	secretKey: argv.qn_secretKey || 'your secret key',
	bucket: argv.qn_bucket || 'your bucket name',
	origin: argv.qn_origin || 'http://qiniudn.com',
	uploadURL: argv.qn_uploadURL || 'http://up.qiniu.com/'
}

exports.AUTH = {
	data: argv.auth_data || { user: 'root' },
	jwtTokenSecret: argv.auth_key || 'nodepress',
	defaultPassword: argv.auth_default_password || 'root'
}

exports.BAIDU = {
	site: argv.baidu_site || 'your baidu site domain like : terry',
	token: argv.baidu_token || 'your baidu seo push token'
}

exports.ALIYUN = {
	ip: argv.aliyun_ip_auth
}

exports.EMAIL = {
	account: argv.email_account || 'your email address like terry',
	password: argv.email_password || 'your email password'
}

exports.AKISMET = {
	key: argv.akismet_key || 'c71123bcf0c7',
	blog: argv.akismet_blog || 'your akismet blog site, like: '
}

exports.APP = {
	ROOT_PATH: __dirname,
	LIMIT: 16,
	PORT: 3002
}

exports.INFO = {
	name: 'terry-blog',
	version: '1.0',
	author: 'Surmon',
	site: 'http://592php.com',
	github: 'https://github.com/terry-ice',
	powered: ['Vue', 'Nuxt.js', 'React', 'Angular', 'Bootstrap4', 'Nodejs', 'MongoDB', 'Express', 'Nginx']
}
