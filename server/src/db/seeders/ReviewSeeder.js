import { Pasta, Review, User } from "../../models/index.js";

class ReviewSeeder {
  static async seed() {
    const reviewData = [
      {
        title: "Nothing Like It!",
        body: "When I'm feeling down, all I really want is a big bowl of spaghetti with bolognese",
        rating: "5",
        recipe: "https://www.bonappetit.com/recipe/bas-best-bolognese",
        pastaId: (await Pasta.query().findOne({ name: "spaghetti" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "Everyone Loves Spaghet",
        body: "While I love spaghetti, you have to admit it's kind of basic...",
        rating: "3",
        pastaId: (await Pasta.query().findOne({ name: "spaghetti" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "Apparently Alfredo Sauce Isn't From Italy",
        body: "I was amazed to hear that Alfredo sauce is not really from Italy? What else would you do with fettucine? I still love it though.",
        rating: "3",
        pastaId: (await Pasta.query().findOne({ name: "fettucine" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "Why?",
        body: "I've never had an angel hair pasta that I liked. It just always seems mushy.",
        rating: "1",
        pastaId: (await Pasta.query().findOne({ name: "angel hair" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "An Underrated Gem",
        body: "I think most people just don't have angel hair that is cooked properly... It's great in a light, oil based sauce! Don't overcook it!",
        rating: "5",
        recipe: "https://www.dinneratthezoo.com/angel-hair-pasta/",
        pastaId: (await Pasta.query().findOne({ name: "angel hair" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "Better Eaten Than A Straw",
        body: "Sure, you could use it as a straw, but well-cooked bucatini has the perfect bite and is so nice in a buttery sauce. Would give it six stars if I could.",
        rating: "5",
        pastaId: (await Pasta.query().findOne({ name: "bucatini" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "Long boy is long",
        body: "",
        rating: "4",
        pastaId: (await Pasta.query().findOne({ name: "bucatini" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "Reminds me of Nonna",
        body: "My grandmother would make this for special occasions. This recipe is pretty close.",
        rating: "5",
        recipe: "https://www.bonappetit.com/recipe/bucatini-all-amatriciana-2",
        pastaId: (await Pasta.query().findOne({ name: "bucatini" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "Why do people try to be fancy?",
        body: "I ordered macaroni and cheese and got this pasta. I just wanted an elbow pasta. I don't think I'm asking for much.",
        rating: "1",
        pastaId: (await Pasta.query().findOne({ name: "cavatappi" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "YUM!",
        body: "I always make macaroni and cheese with this. Want to try it with other sauces, but I just always go back to making mac and cheese.",
        rating: "4",
        recipe: "https://smittenkitchen.com/2018/02/quick-essential-stovetop-mac-and-cheese/",
        pastaId: (await Pasta.query().findOne({ name: "cavatappi" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "Macrar-only one for me!",
        body: "Any mac-and-cheese made with anything other than elbows is a travesty.",
        rating: "5",
        pastaId: (await Pasta.query().findOne({ name: "macaroni" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "Take it or leave it...",
        body: "If there's not much at the store, I'll buy it. But I never go to the store TO buy it. Y'know?",
        rating: "2",
        pastaId: (await Pasta.query().findOne({ name: "macaroni" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "Is this anyone's favorite?",
        body: "I know it exists. But does anyone go out of their way for this?",
        rating: "2",
        pastaId: (await Pasta.query().findOne({ name: "penne" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "Good but not great",
        body: "",
        rating: "3",
        pastaId: (await Pasta.query().findOne({ name: "penne" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "Wagon wheels were my favorite growing up!",
        body: "",
        rating: "4",
        pastaId: (await Pasta.query().findOne({ name: "rotelle" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "Wish I liked these more... The sauce is good though!",
        body: "These are so fun and floppy when they cook up! But I feel like they take forever to cook!",
        rating: "3",
        recipe: "https://www.the-pasta-project.com/mezzi-paccheri-with-mushrooms-and-cream/",
        pastaId: (await Pasta.query().findOne({ name: "paccheri" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "N is for Nostalgia",
        body: "Gotta love pasta you can spell with!",
        rating: "4",
        pastaId: (await Pasta.query().findOne({ name: "alfabeti" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "Am I Dead Inside? I never liked these.",
        body: "They always turned to mush in the soup- wasn't a fan.",
        rating: "2",
        pastaId: (await Pasta.query().findOne({ name: "alfabeti" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "You need to try this recipe!",
        body: "It's not technically a soup- but I love this recipe for pasta and chickpeas! I always make it with ditali!",
        rating: "4",
        recipe: "https://smittenkitchen.com/2017/10/quick-pasta-and-chickpeas-pasta-e-ceci/",
        pastaId: (await Pasta.query().findOne({ name: "ditali" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "Stellar",
        body: "They're so cute!",
        rating: "5",
        pastaId: (await Pasta.query().findOne({ name: "stelle" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "Still trying to perfect my recipe!",
        body: "I recently learned I DON'T have to boil these pasta first. Game changer. Still trying to nail the recipe though.",
        rating: "4",
        recipe: "https://www.recipetineats.com/spinach-ricotta-cannelloni/",
        pastaId: (await Pasta.query().findOne({ name: "cannelloni" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "You gotta try this!",
        body: "I went out to a nice restaurant and I had egg yolk ravioli! So! Good! Then I made it at home. Scary to make but rewarding!",
        rating: "4",
        recipe: "https://www.tastingtable.com/686436/egg-yolk-ricotta-ravioli-recipe-pasta/",
        pastaId: (await Pasta.query().findOne({ name: "ravioli" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "Perfection",
        body: "How can you say no to pasta with cheese in it? You can't. (Unless you're gluten/lactose free. I'm sorry for you.)",
        rating: "5",
        pastaId: (await Pasta.query().findOne({ name: "ravioli" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "Please try this soup!",
        body: "I love making this soup, and the only thing that could make it better is tortellini!",
        rating: "5",
        recipe: "https://www.newyorker.com/culture/kitchen-notes/the-many-lives-of-roberto-a-soup",
        pastaId: (await Pasta.query().findOne({ name: "tortellini" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "F is for Favorite (and Farfalle)",
        rating: "5",
        pastaId: (await Pasta.query().findOne({ name: "farfalle" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "I didn't call it farfalle growing up!",
        body: "I always knew these as 'varnishkes'. Hope Italains aren't offended, but this is a great use for them.",
        rating: "4",
        recipe: "https://food52.com/recipes/76059-kasha-varnishkes",
        pastaId: (await Pasta.query().findOne({ name: "farfalle" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "The only good thing from 2021",
        body: "",
        rating: "5",
        recipe: "https://www.youtube.com/watch?v=qJuvwjd8rMg",
        pastaId: (await Pasta.query().findOne({ name: "cascatelli" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
      {
        title: "Takes too long to cook...",
        body: "",
        rating: "3",
        pastaId: (await Pasta.query().findOne({ name: "cascatelli" })).id,
        userId: (await User.query().findOne({ email: "ethanAK@gmail.com" })).id,
      },
      {
        title: "That's a gno from me",
        body: "I just can't get into these... Don't know why.",
        rating: "1",
        pastaId: (await Pasta.query().findOne({ name: "gnocchi" })).id,
        userId: (await User.query().findOne({ email: "mstacey@gmail.com" })).id,
      },
    ];
    for (const singleReviewData of reviewData) {
      const currentReview = await Review.query().findOne({ title: singleReviewData.title });
      if (!currentReview) {
        await Review.query().insert(singleReviewData);
      }
    }
  }
}

export default ReviewSeeder;
