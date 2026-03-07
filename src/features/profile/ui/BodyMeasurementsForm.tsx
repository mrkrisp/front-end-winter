import { Activity, Goal, Ruler, Weight } from 'lucide-react'
import Image from 'next/image'
import { Controller, UseFormReturn } from 'react-hook-form'

import InputLabel from '@/shared/components/custom-ui/with-label/InputLabel'
import { SelectLabel } from '@/shared/components/custom-ui/with-label/SelectLabel'

import { ActivityLevel, Gender, NutritionGoal } from '@/__generated__/graphql'

import { TProfileForm } from '../types/profile-update.types'

function BodyMeasurementsForm({
  form
}: {
  form: UseFormReturn<TProfileForm, unknown, TProfileForm>
}) {
  const { register } = form

  return (
    <div className="flex items-center gap-3 rounded-xl border bg-white p-6">
      <Image
        src={
          form.watch('profile.gender') === Gender.Male
            ? '/images/Male.svg'
            : '/images/Female.svg'
        }
        alt="Women"
        width={250}
        height={500}
      />
      <div>
        <h2 className="mb-6 text-lg font-semibold">Body measurements</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <InputLabel
              Icon={Ruler}
              type="number"
              label="Growth"
              placeholder="Height cm"
              {...register('measurements.heightCm', {
                setValueAs: value => (value === '' ? undefined : Number(value))
              })}
            />
          </div>

          <InputLabel
            Icon={Weight}
            type="number"
            label="Current weight"
            placeholder="Current weight kg"
            {...register('measurements.weightKg', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Weight}
            type="number"
            label="Desired weight"
            placeholder="Goal weight kg"
            {...register('measurements.goalWeightKg', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Ruler}
            type="number"
            label="Waist circumference"
            placeholder="Waist cm"
            {...register('measurements.waistCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Ruler}
            type="number"
            label="Chest circumference"
            placeholder="Chest cm"
            {...register('measurements.chestCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Ruler}
            type="number"
            label="Thigh circumference"
            placeholder="Thigh cm"
            {...register('measurements.thighCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Ruler}
            type="number"
            label="Arm circumference"
            placeholder="Arm cm"
            {...register('measurements.armCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <div className="col-span-2 space-y-4">
            <Controller
              control={form.control}
              name="measurements.nutritionGoal"
              render={({ field }) => (
                <SelectLabel
                  Icon={Goal}
                  label="Set your nutritional goals"
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    { label: 'Lose weight', value: NutritionGoal.WeightLoss },
                    {
                      label: 'Maintain weight',
                      value: NutritionGoal.Maintenance
                    },
                    { label: 'Gain muscle', value: NutritionGoal.MuscleGain }
                  ]}
                />
              )}
            />

            <Controller
              control={form.control}
              name="measurements.activityLevel"
              render={({ field }) => (
                <SelectLabel
                  Icon={Activity}
                  label="Define your activity level"
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    { label: 'Lightly active', value: ActivityLevel.Light },
                    {
                      label: 'Moderately active',
                      value: ActivityLevel.Moderate
                    },
                    { label: 'Active', value: ActivityLevel.Active },

                    {
                      label: 'Sedentary',
                      value: ActivityLevel.Sedentary
                    },
                    { label: 'Very active', value: ActivityLevel.VeryActive }
                  ]}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyMeasurementsForm
