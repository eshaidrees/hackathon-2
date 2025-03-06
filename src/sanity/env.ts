export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-21'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
 "skUS9DHQquwg1FMH1drHltIUzxv9JI7qyYqTaMEhqW3rjLB6H7i6AJxYHYwB4AKU3LDQ6DnJljvGiNoPSIaUwmedlTU5bVywVmlKAnO8krdqFkf1OgRkLQGPg5j6a6GQdIJDfOQBuctIbFl9Z8jOk3Gl0KtRcQT3m6ootGDbXYEZ5z506GFS",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
