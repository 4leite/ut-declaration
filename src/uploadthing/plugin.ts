
import { Adapter } from ".."
import { deleteImage } from "./api"

export const uploadthingPlugin = (
  adapter: Adapter,
): Adapter => ({
  ...adapter,
  deleteImage: async (key) => {
    await Promise.allSettled([
      //
      deleteImage(key),
      adapter.deleteImage(key),
    ])
  },
})
