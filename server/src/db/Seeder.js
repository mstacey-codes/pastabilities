/* eslint-disable no-console */
import { connection } from "../boot.js";
import CategorySeeder from "./seeders/CategorySeeder.js";
import PastaSeeder from "./seeders/PastaSeeder.js";
import ReviewSeeder from "./seeders/ReviewSeeder.js"
import UserSeeder from "./seeders/UserSeeder.js";

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("seeding categories");
    await CategorySeeder.seed();
    console.log("seeding pastas");
    await PastaSeeder.seed();
    console.log("seeding users");
    await UserSeeder.seed();
    console.log("seeding reviews");
    await ReviewSeeder.seed();
    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
