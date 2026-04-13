import { ChefHat, Star } from 'lucide-react'

import { RecipeCarousel } from '@/features/recipe-carousel/RecipeCarousel'

import { Difficulty, GetAllRecipesQuery } from '@/__generated__/graphql'

// interface Props {
//   recommendedRecipes: GetAllRecipesQuery['recipes']
//   popularRecipes: GetAllRecipesQuery['recipes']
// }

const recommended = [
  {
    title: 'Smoothie Bowl',
    description:
      'Learn how to make the best smoothie bowl recipe with 5 ingredients in 5 minutes.',
    slug: 'smoothie-bowl',
    calories: 220,
    cookingTime: 5,
    difficulty: Difficulty.Easy,
    likesCount: 21800,
    isLiked: false,
    createdAt: Date.now(),
    id: '1'
  },
  {
    title: 'Seared Scallops with White Beans and Spinach',
    description:
      'This recipe for seared scallops with white beans and spinach turns out a healthy dinner.',
    slug: 'seared-scallops-with-white-beans-and-spinach',
    calories: 420,
    cookingTime: 20,
    difficulty: Difficulty.Hard,
    likesCount: 7100,
    isLiked: false,
    createdAt: Date.now(),
    id: '2'
  },
  {
    title: 'The Only High-Protein Veggie Sandwich',
    description:
      'From beans to tofu to tempeh bacon, this high-protein veggie sandwich formula is filling and simple.',
    slug: 'the-only-high-protein-veggie-sandwich',
    calories: 250,
    cookingTime: 15,
    difficulty: Difficulty.Easy,
    likesCount: 1100,
    isLiked: false,
    createdAt: Date.now(),
    id: '3'
  },
  {
    title: 'High-Protein Black Bean Salad',
    description:
      'A satisfying high-protein black bean salad with fresh vegetables and bold flavor.',
    slug: 'high-protein-black-bean-salad',
    calories: 280,
    cookingTime: 15,
    difficulty: Difficulty.Medium,
    likesCount: 12000,
    isLiked: false,
    createdAt: Date.now(),
    id: '4'
  },
  {
    title: 'Greek Yogurt Berry Parfait',
    description:
      'Layers of Greek yogurt, berries, and granola for a quick protein-rich breakfast.',
    slug: 'greek-yogurt-berry-parfait',
    calories: 310,
    cookingTime: 10,
    difficulty: Difficulty.Easy,
    likesCount: 6400,
    isLiked: false,
    createdAt: Date.now(),
    id: '5'
  },
  {
    title: 'Chickpea Avocado Toast',
    description:
      'Mashed chickpeas and avocado on toasted bread with lemon and herbs.',
    slug: 'chickpea-avocado-toast',
    calories: 340,
    cookingTime: 12,
    difficulty: Difficulty.Easy,
    likesCount: 5300,
    isLiked: false,
    createdAt: Date.now(),
    id: '6'
  }
]

const popular: GetAllRecipesQuery['recipes'] = [
  {
    title: 'Mushroom Quiche',
    description:
      'This crustless salmon, spinach and mushroom quiche is easy to make and great for brunch.',
    slug: 'mushroom-quiche',
    calories: 220,
    cookingTime: 35,
    difficulty: Difficulty.Medium,
    likesCount: 21800,
    isLiked: false,
    createdAt: Date.now(),
    id: '1'
  },
  {
    title: 'Spinach Breakfast Taco',
    description:
      'A healthy breakfast taco with spinach and egg that comes together fast.',
    slug: 'spinach-breakfast-taco',
    calories: 189,
    cookingTime: 15,
    difficulty: Difficulty.Easy,
    likesCount: 9800,
    isLiked: false,
    createdAt: Date.now(),
    id: '2'
  },
  {
    title: 'Strawberry Spinach Salad',
    description:
      'A fresh strawberry spinach salad with greens, berries, and a light dressing.',
    slug: 'strawberry-spinach-salad',
    calories: 354,
    cookingTime: 15,
    difficulty: Difficulty.Easy,
    likesCount: 8700,
    isLiked: false,
    createdAt: Date.now(),
    id: '3'
  },
  {
    title: 'Cottage Cheese Toast',
    description:
      'Whole-grain toast topped with creamy cottage cheese, avocado, and egg.',
    slug: 'cottage-cheese-toast',
    calories: 456,
    cookingTime: 10,
    difficulty: Difficulty.Easy,
    likesCount: 11200,
    isLiked: false,
    createdAt: Date.now(),
    id: '4'
  },
  {
    title: 'Salmon & Sweet Potato Grain Bowl',
    description:
      'A hearty grain bowl with salmon, sweet potato, and vegetables for a balanced meal.',
    slug: 'salmon-and-sweet-potato-grain-bowl',
    calories: 487,
    cookingTime: 30,
    difficulty: Difficulty.Medium,
    likesCount: 9400,
    isLiked: false,
    createdAt: Date.now(),
    id: '5'
  },
  {
    title: 'Turkey Hummus Wrap',
    description:
      'A quick wrap with turkey, hummus, greens, and crunchy vegetables.',
    slug: 'turkey-hummus-wrap',
    calories: 390,
    cookingTime: 12,
    difficulty: Difficulty.Easy,
    likesCount: 7600,
    isLiked: false,
    createdAt: Date.now(),
    id: '6'
  },
  {
    title: 'Egg Fried Cauliflower Rice',
    description:
      'Light cauliflower rice stir-fried with egg, peas, and green onion.',
    slug: 'egg-fried-cauliflower-rice',
    calories: 295,
    cookingTime: 18,
    difficulty: Difficulty.Easy,
    likesCount: 6900,
    isLiked: false,
    createdAt: Date.now(),
    id: '6'
  }
]

export function RecipesCatalog() {
  return (
    <div>
      <RecipeCarousel
        recipes={recommended}
        Icon={ChefHat}
        title="Recommended"
      />
      <RecipeCarousel
        recipes={popular}
        Icon={Star}
        title="Popular"
        size="sm"
      />
    </div>
  )
}
