import { Restaurant } from "@/src/types";

export const RESTAURANTS: Restaurant[] = [
  {
    id: "1",
    name: "The Golden Whisk",
    cuisine: "Modern French",
    location: "Upper East Side",
    rating: 4.8,
    reviews: 2400,
    deliveryTime: "25-35 mins",
    deliveryFee: 0,
    priceRange: "$$$",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZvgVJQ2BI6FXEhSVfwVaq-OHnD0llXlXiECGDhtkBxOaaKT6B1DSGI3eBHhROX8MV21aS-b1Z1gNkC6gqHOx5vOFI7ufscNf6s2TPMeLI7r3JgQCMvQTqot3zmCRoRwBd2rS97gwoE9WHwvjj4jzynhkF7v_x0fEFaZXSxC2xno4QgRcfaPFGeWfeSxd_8VrL-XW-_jP5f87cQw2FnJlgkbeyNg2S4zUcSgO2_F808hh835Dp7sWhzU1P0FYu4C-w_KSMcZ_ahTUd",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjcJKuO-GyG3ey960ZH9MRHyEjc4-OXjBehVrt9ox2fPKlT50kzmPgCvp2dgEZqm7JeSNeAhZeX50A3PBKloQxbw6GPt6LtlXbThScVWr3Xx0WbeOOMKtt9U_B84HEoPJVsHxToKCaynsOj9a82-lEw9Hx4kVgyEWkecf_yqeyWujlpR2AfcZ6J6jzjC4QFtnxZBk9ZdPJSDzp4DNKL6RSpmdnOs_ZO3H5Vd7E2fNd6q07R2n3esqCSwvDrvnEx4Jiw7Tim3tcks_3",
    categories: ["Starters", "Main Course", "Desserts", "Drinks"],
    menu: [
      {
        id: "m1",
        name: "Harvest Green Bowl",
        description: "Quinoa base, roasted sweet potato, avocado, massaged kale, and our house-made tahini lemon drizzle.",
        price: 18.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF87oNUa5rPrtLSPrR0NUUjRrh7FJsfQq3X85BUEA3pbSRXvJFVgVzaB65gEfxJ_gGv3wmGo-nKW-3b4y_zKpPC77KewdiUDbeutb-Pi-OasrLRnn__513sx5oCpbAw7qHJk_yt_7xmKiP0Ob09FBVrpgrSwiO7nPcvwaz3JyIGkZIx4jag_EZyQ20FjKiIf6izsAY-2bPWPL9ar2JnfLZ2fvq52SKfFiuJr60D7NMSpIqpBsufv7bcW-AfmXikaGwauf3i6eVRgHZ",
        category: "Starters",
        popular: true
      },
      {
        id: "m2",
        name: "Truffle Tagliatelle",
        description: "Hand-cut ribbon pasta tossed in a creamy parmesan emulsion with shaved black winter truffles.",
        price: 24.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvU-15QxsZUuDJvwaWC-t3PtJJkZoUoeWqxcPH2D6t5W2Rq3zkjLGwfOQv4DIbe670GwTwU7_TVbnklBALaCaZmt5FkfADlLEzzN0XB50Ryhb03MsEQOZfjFCP_kezGzfq1sd0mzE4JWUtFmc1GlWhdHhNorV3Qn5AN1xIMcuDiZnGf1Ph1TAX6U_w2e_VYzadOdM5O7pIPVqJvxxqzjn6W8GJGoWRH9_xT63ZPyLAVnLfv8PODMPIHdmWjqEjyKIZOXmumDqCSlmA",
        category: "Main Course",
        vegetarian: true
      },
      {
        id: "m3",
        name: "Smoked Short Rib",
        description: "12-hour hickory smoked beef, whiskey glaze, served with charred broccolini and potato puree.",
        price: 32.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlrgeJ7-Il3_YlLg8m4Jvblp31XHvN2Dq7_nf1KiGLMV9CYpR7MFc2uu6bgg6kFEI7VYOA7vrZoRm1S_BIcqtaJxpWXU3hxmA0DC458zJFI4LheTKGcgyZjZDZfB98KhA6UDz-9UwUg0TWqaoquxJ-p0vr9eHMZ5WpSOfW9FuI95DGbarcXflsRCgsquT7NXJl1zTBn04p7WPf4Wku0SZcKpgtYZ6nuTge2JQHPmScgYtaJYkSL6UtxSy1PGu0W0TNHQXKajypz_tj",
        category: "Main Course"
      },
      {
        id: "m4",
        name: "Grilled Octopus",
        description: "Spanish octopus, paprika soil, lemon gel, and crispy heirloom potatoes.",
        price: 26.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArUQaGYRQ63slGDd-Hf8XJY36DTQSlXw2kg3k48G7cSzgIE59BQiA9WpxQD4IBIYoLlHVmVT59wezqzX5V-lKjFCsqLsSX5u6yVS_N5OnFqqzMOmIaOK-hg_g45aXH_lp4Vc3NyK7sbDtxMSoei-bo_Q2N5vYmn1pot-U1bQeN53mqIxaHpK_gE_ghTMRKcbFlMJS-CRfudd8PQSNhDKrBuMIfDNiF5nYbLmU9w7uOn52AsRvsV0rlzTO0YXxDZFcscadk8i3GN0qb",
        category: "Starters"
      }
    ]
  },
  {
    id: "2",
    name: "Orizuru Sushi",
    cuisine: "Japanese Omakase",
    location: "Downtown",
    rating: 4.9,
    reviews: 1800,
    deliveryTime: "45-60 mins",
    deliveryFee: 0,
    priceRange: "$$$$",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa8inbryBm3DiZaf0-gpa4ymJJVTWNy2vSvm7N5QEyc1CtRwQLQONl6Y7oKc8_N3AnYxP1MhQNYeSnlQmGrI8bITK_V2IVW6BfvzMXDcd0odili2uCkKOZGLALtW9Y0tzMgmfPRBMXsyCcz0padr1TBaJZQbfbrv_bAfEQeIzBV9ggyatUz-UEIYTumwaEC2AIpdF4p0PjxhAQ4pgMuT29x8i2EiIidM-s7ZDglLCzv1TuKNlcFQJePLe383D3CPoLPzmIjBN9zjJE",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa8inbryBm3DiZaf0-gpa4ymJJVTWNy2vSvm7N5QEyc1CtRwQLQONl6Y7oKc8_N3AnYxP1MhQNYeSnlQmGrI8bITK_V2IVW6BfvzMXDcd0odili2uCkKOZGLALtW9Y0tzMgmfPRBMXsyCcz0padr1TBaJZQbfbrv_bAfEQeIzBV9ggyatUz-UEIYTumwaEC2AIpdF4p0PjxhAQ4pgMuT29x8i2EiIidM-s7ZDglLCzv1TuKNlcFQJePLe383D3CPoLPzmIjBN9zjJE",
    categories: ["Sushi", "Sashimi", "Hot Dishes", "Drinks"],
    menu: []
  },
  {
    id: "3",
    name: "Terra & Mare",
    cuisine: "Italian Kitchen",
    location: "Chelsea",
    rating: 4.6,
    reviews: 1200,
    deliveryTime: "15-25 mins",
    deliveryFee: 2.99,
    priceRange: "$$",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJPTp55qTzsPWx6SPGEpIqPgOzoAjLDoyrNMwOPDkeVrDVQZIccWhTHseVMJB_YiSwF8tYW3qNG_UKQhCC2d3JzPRgo-Gbr-MbNCJnTAf1Zo1670dLMvz-48WTzajefo2ppVUyorX7oO8CW9spzuXPVjDKHx7tfI2UaR8w8ZC-DIXXYC9-3CJapT8h1-5gK1UlNf3ss9tEBZ1xLIo0scltqXGf6B58fTme6aGd3eCNNz6l_t7EW6yToT0CFYJOSC8VDjmDkKfNz75h",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJPTp55qTzsPWx6SPGEpIqPgOzoAjLDoyrNMwOPDkeVrDVQZIccWhTHseVMJB_YiSwF8tYW3qNG_UKQhCC2d3JzPRgo-Gbr-MbNCJnTAf1Zo1670dLMvz-48WTzajefo2ppVUyorX7oO8CW9spzuXPVjDKHx7tfI2UaR8w8ZC-DIXXYC9-3CJapT8h1-5gK1UlNf3ss9tEBZ1xLIo0scltqXGf6B58fTme6aGd3eCNNz6l_t7EW6yToT0CFYJOSC8VDjmDkKfNz75h",
    categories: ["Pasta", "Pizza", "Salads", "Drinks"],
    menu: []
  }
];
