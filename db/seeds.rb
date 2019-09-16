# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# create main categories of sneakers (by style)
# put 10 sneakers in each category
# for each of those sneakers create 10 listings
# for each listing generate a price using min and max categories
#create a function that takes in a range of numbers and returns number to be used as a price for listings-number should be evenly
#divisible by five ()
#
Sneaker.destroy_all

 jordans = [
    {
      model: "Air Jordan 1 Retro High OG 'Chicago' 2015",
      description: "The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",
      release_date: "30/05/2015",
      colorway: "White/Varsity Red-Black",
      brand: "Air Jordan",
      silhouette: "Air Jordan 1",
      technology: "Air",
      designer: "Peter Moore"
    },
    {   
      model: "Air Jordan 1 Retro High OG 'Obsidian'",
      description: "The Air Jordan 1 Retro High OG is a work of nostalgia, modernizing the 1985 icon's distinctive elements to honor Michael Jordan's legendary career arc. Debuted in August 2017, this 'Obsidian' version tributes MJ's college alma mater through a team-inspired, color block palette on the leather upper. Matching branding notes and Swooshes play their part in the homage. The Nike Air infused midsole and circular rubber outsole supply classic comfort and traction.",
      release_date: "31/08/2019",
      colorway: "Sail/Obsidian-University Blue",
      brand: "Air Jordan",
      silhouette: "Air Jordan 1",
      technology: "Air",
      designer: "Peter Moore"
    },
    {
      model: "Air Jordan 1 Retro High OG 'Bred Toe'",
      description: "Arriving in stores in February 2018, the Air Jordan 1 Retro High OG ‘Bred Toe’ is a new spin on a classic design. The Chicago Bulls-inspired colorway combines elements of the ‘Bred’ and ‘Black Toe’ editions of the Air Jordan 1, executed on a premium leather build. The high-top features a black Swoosh on the white quarter panel, along with contrasting pops of red on the toe box, heel, collar, and outsole. The shoe stays true to its OG 1985 roots with Nike Air branding on the tongue tag and sockliner.",
      release_date: "24/02/2018",
      colorway: "Gym Red/Summit White-Black",
      brand: "Air Jordan",
      silhouette: "Air Jordan 1",
      technology: "Air",
      designer: "Peter Moore"
    },
    {
      model: "Air Jordan 1 Retro High OG 'Rookie of the Year'",
      description: "In 1985, Michael Jordan received the NBA’s Rookie of the Year Award after launching his career with a remarkable point per game average and a thirst for success. To celebrate, Jordan Brand released the Air Jordan 1 Retro High OG 'Rookie of the Year.' The high top features a white-based leather upper with perforations on the toe box for breathability and Gold Harvest leather overlays on the mudguard, ankle, eyestay, and heel. Hidden on the inside of each strap on the upper are callouts to MJ’s outstanding rookie season. ‘1984-85 R.O.Y. 2313 POINTS 28.2 PPG’ can be found on the inside of one strap, and a quote from Jordan can be found on the other.",
      release_date: "17/11/2018",
      colorway: "Gold Harvest/Black-Sail",
      brand: "Air Jordan",
      silhouette: "Air Jordan 1",
      technology: "Air",
      designer: "Peter Moore"
    },
      {
      model: "Random",
      description: "The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",
      release_date: "30/05/2015",
      colorway: "White/Varsity Red-Black",
      brand: "Air Jordan",
      silhouette: "Air Jordan 1",
      technology: "Air",
      designer: "Peter Moore"
    },
    {   
      model: "Random2",
      description: "The Air Jordan 1 Retro High OG is a work of nostalgia, modernizing the 1985 icon's distinctive elements to honor Michael Jordan's legendary career arc. Debuted in August 2017, this 'Obsidian' version tributes MJ's college alma mater through a team-inspired, color block palette on the leather upper. Matching branding notes and Swooshes play their part in the homage. The Nike Air infused midsole and circular rubber outsole supply classic comfort and traction.",
      release_date: "31/08/2019",
      colorway: "Sail/Obsidian-University Blue",
      brand: "Air Jordan",
      silhouette: "Air Jordan 1",
      technology: "Air",
      designer: "Peter Moore"
    },
    {
      model: "Random3",
      description: "Arriving in stores in February 2018, the Air Jordan 1 Retro High OG ‘Bred Toe’ is a new spin on a classic design. The Chicago Bulls-inspired colorway combines elements of the ‘Bred’ and ‘Black Toe’ editions of the Air Jordan 1, executed on a premium leather build. The high-top features a black Swoosh on the white quarter panel, along with contrasting pops of red on the toe box, heel, collar, and outsole. The shoe stays true to its OG 1985 roots with Nike Air branding on the tongue tag and sockliner.",
      release_date: "24/02/2018",
      colorway: "Gym Red/Summit White-Black",
      brand: "Air Jordan",
      silhouette: "Air Jordan 1",
      technology: "Air",
      designer: "Peter Moore"
    },
    {
      model: "Random4",
      description: "In 1985, Michael Jordan received the NBA’s Rookie of the Year Award after launching his career with a remarkable point per game average and a thirst for success. To celebrate, Jordan Brand released the Air Jordan 1 Retro High OG 'Rookie of the Year.' The high top features a white-based leather upper with perforations on the toe box for breathability and Gold Harvest leather overlays on the mudguard, ankle, eyestay, and heel. Hidden on the inside of each strap on the upper are callouts to MJ’s outstanding rookie season. ‘1984-85 R.O.Y. 2313 POINTS 28.2 PPG’ can be found on the inside of one strap, and a quote from Jordan can be found on the other.",
      release_date: "17/11/2018",
      colorway: "Gold Harvest/Black-Sail",
      brand: "Air Jordan",
      silhouette: "Air Jordan 1",
      technology: "Air",
      designer: "Peter Moore"
    },
    {
      model: "Random5",
      description: "In 1985, Michael Jordan received the NBA’s Rookie of the Year Award after launching his career with a remarkable point per game average and a thirst for success. To celebrate, Jordan Brand released the Air Jordan 1 Retro High OG 'Rookie of the Year.' The high top features a white-based leather upper with perforations on the toe box for breathability and Gold Harvest leather overlays on the mudguard, ankle, eyestay, and heel. Hidden on the inside of each strap on the upper are callouts to MJ’s outstanding rookie season. ‘1984-85 R.O.Y. 2313 POINTS 28.2 PPG’ can be found on the inside of one strap, and a quote from Jordan can be found on the other.",
      release_date: "17/11/2018",
      colorway: "Gold Harvest/Black-Sail",
      brand: "Air Jordan",
      silhouette: "Air Jordan 1",
      technology: "Air",
      designer: "Peter Moore"
    },
    {
      model: "Random6",
      description: "In 1985, Michael Jordan received the NBA’s Rookie of the Year Award after launching his career with a remarkable point per game average and a thirst for success. To celebrate, Jordan Brand released the Air Jordan 1 Retro High OG 'Rookie of the Year.' The high top features a white-based leather upper with perforations on the toe box for breathability and Gold Harvest leather overlays on the mudguard, ankle, eyestay, and heel. Hidden on the inside of each strap on the upper are callouts to MJ’s outstanding rookie season. ‘1984-85 R.O.Y. 2313 POINTS 28.2 PPG’ can be found on the inside of one strap, and a quote from Jordan can be found on the other.",
      release_date: "17/11/2018",
      colorway: "Gold Harvest/Black-Sail",
      brand: "Air Jordan",
      silhouette: "Air Jordan 1",
      technology: "Air",
      designer: "Peter Moore"
    },
    {
      model: "Random7",
      description: "In 1985, Michael Jordan received the NBA’s Rookie of the Year Award after launching his career with a remarkable point per game average and a thirst for success. To celebrate, Jordan Brand released the Air Jordan 1 Retro High OG 'Rookie of the Year.' The high top features a white-based leather upper with perforations on the toe box for breathability and Gold Harvest leather overlays on the mudguard, ankle, eyestay, and heel. Hidden on the inside of each strap on the upper are callouts to MJ’s outstanding rookie season. ‘1984-85 R.O.Y. 2313 POINTS 28.2 PPG’ can be found on the inside of one strap, and a quote from Jordan can be found on the other.",
      release_date: "17/11/2018",
      colorway: "Gold Harvest/Black-Sail",
      brand: "Air Jordan",
      silhouette: "Air Jordan 1",
      technology: "Air",
      designer: "Peter Moore"
    },
    {
      model: "Random8",
      description: "In 1985, Michael Jordan received the NBA’s Rookie of the Year Award after launching his career with a remarkable point per game average and a thirst for success. To celebrate, Jordan Brand released the Air Jordan 1 Retro High OG 'Rookie of the Year.' The high top features a white-based leather upper with perforations on the toe box for breathability and Gold Harvest leather overlays on the mudguard, ankle, eyestay, and heel. Hidden on the inside of each strap on the upper are callouts to MJ’s outstanding rookie season. ‘1984-85 R.O.Y. 2313 POINTS 28.2 PPG’ can be found on the inside of one strap, and a quote from Jordan can be found on the other.",
      release_date: "17/11/2018",
      colorway: "Gold Harvest/Black-Sail",
      brand: "Air Jordan",
      silhouette: "Air Jordan 1",
      technology: "Air",
      designer: "Peter Moore"
    }
 ]

 sneakers = jordans.map! { |sneaker| Sneaker.create(sneaker) }
