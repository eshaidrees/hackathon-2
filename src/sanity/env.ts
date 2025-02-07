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
 "skNDwJhORrHAhUeyg0Bqq3CyReLvOneqXbyrbJ8e8BUlPbYvcyc4w77I8YmtJ8hxliyhiOBjKNHh05oXkzVcCHop1qyqQmCqrRuwnXoHPbQCbOYP8gPY4MOVhbLpNXzyWX5XjOV6I6VSkD0prZsHipnkHiduLeJDoIp8i2cRZaWKX6JeI32t",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
