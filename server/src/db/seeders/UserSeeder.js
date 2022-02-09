import { User } from '../../models/index.js'

class UserSeeder {
    static async seed() {

        const userData = [
            {
                email: 'seed1@pasta.com',
                cryptedPassword: 'seed1',

            },
            {
                email: 'seed2@pasta.com',
                cryptedPassword: 'seed2'
            }
        ]
        for (const singleUserData of userData) {
            const currentUser = await User.query().findOne({ email: singleUserData.email })
            if (!currentUser) {
                await User.query().insert(singleUserData)
            }
        }
    }
}

export default UserSeeder