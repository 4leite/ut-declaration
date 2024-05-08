export * from "./uploadthing/components"

export type Adapter = {
  can: () => Promise<boolean>
  deleteImage: (key: string) => Promise<void>
}
