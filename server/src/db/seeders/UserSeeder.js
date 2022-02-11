import { User } from "../../models/index.js";

class UserSeeder {
  static async seed() {
    const userData = [
      {
        email: "mstacey@gmail.com",
        cryptedPassword: "tf)h3q33E/YfPGSXd8.=bs",
      },
      {
        email: "ethanAK@gmail.com",
        cryptedPassword: "Yg-j4w44F?UgQHDCf9/+nd",
      },
    ];
    for (const singleUserData of userData) {
      const currentUser = await User.query().findOne({
        email: singleUserData.email,
      });
      if (!currentUser) {
        await User.query().insert(singleUserData);
      }
    }
  }
}

export default UserSeeder;
