const userModule = require('../../models').USER_MODEL
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    async createUser(req, res) {
        try {
            const data = req.body
            if (!data.username) return res.status(422).send({ code: 422, status: 'failed', message: 'username is required!' })
            if (!data.password) return res.status(422).send({ code: 422, status: 'failed', message: 'password is required!' })
            if (!data.role) return res.status(422).send({ code: 422, status: 'failed', message: 'role is required!' })
            data.username = data.username.toLowerCase()
            if (data.role != 'User' && data.role != 'Admin') return res.status(422).send({ code: 422, status: 'failed', message: 'role is case sencitive it must be "User" or "Admin"'})
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const user = await userModule.findUserById(data.username, data.role)
            if(user) return res.status(422).send({ code: 422, status: 'failed', message: 'user already exist!' })
            data.password = bcrypt.hashSync(data.password, 10)
            await userModule.create(data)
            return res.status(200).send({ code: 200, status: 'success', message: 'user create successfully.' })
        } catch(err) {
            return res.status(422).send({ code: 422, status: 'failed', message: err.message })
        }
    },

    async userLogin(req, res) {
		let {
			body: { username, password },
		} = req
		if (!username) return res.status(422).send({ code: 422, status: 'failed', message: 'username is required for login.' })
		if (!password) return res.status(422).send({ code: 422, status: 'failed', message: 'password is required for login.' })
        username = username.toLowerCase()
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
		try {
			let user = await userModule.findUserById(username)
			if (!user) return res.status(422).send({ code: 422, status: 'failed', message: 'username not found!' })
			if (!user.password) return res.status(422).send({ code: 422, status: 'failed', message: 'invalid password!' })
			let varyfyPassword = bcrypt.compareSync(password, user.password)
			if (!varyfyPassword) return res.status(422).send({ code: 422, status: 'failed', message: 'invalid password!' })
			let payload = {
				username: user.username,
				roles: user.role,
			}
			let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24hr' })
			return res.status(200).send({ code: 200, status: 'success', data: token })
		} catch (err) {
			return res.status(422).send({ code: 422, status: 'failed', message: err.message })
		}
	},
}