import {
  ActivityLevel,
  Gender,
  NutritionGoal,
  UserUpdateInput
} from '@/__generated__/graphql'

export interface IProfileForm {
  email?: string

  fullName?: string
  gender?: Gender
  age?: number
  bio?: string

  heightCm?: number
  weightKg?: number
  goalWeightKg?: number
  chestCm?: number
  waistCm?: number
  thighCm?: number
  armCm?: number

  activityLevel?: ActivityLevel
  nutritionGoal?: NutritionGoal

  avatarUrl?: string
}

export type TProfileForm = Omit<UserUpdateInput, 'password'>
