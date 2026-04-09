import { SkeletonLoader } from '@/shared/components/custom-ui/SkeletonLoader'

interface Props {
  count?: number
}

export function RecipeItemSkeleton({ count = 1 }: Props) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="flex w-78 flex-col rounded-3xl p-3.5"
        >
          <div className="mb-3 flex items-center justify-center">
            <SkeletonLoader className="h-35 w-full rounded-2xl" />
          </div>
          <SkeletonLoader className="mb-2 h-5 w-33" />
          <div className="mb-1">
            <SkeletonLoader
              count={2}
              className="mb-0.5 h-5 w-full"
            />
          </div>
          <div className="mb-3 flex items-center gap-1">
            <SkeletonLoader
              count={2}
              className="mb-0 h-4 w-12"
            />
          </div>
          <div className="flex justify-between">
            <SkeletonLoader className="h-5 w-16" />
            <SkeletonLoader className="h-5 w-8 rounded-sm" />
          </div>
        </div>
      ))}
    </>
  )
}
