const config = {
    bucket_name: process.env.JAMSTACK_APP_BUCKET_SLUG || "Vassfazek",
    bucket_slug: process.env.JAMSTACK_APP_BUCKET_SLUG || "vassfazek",
    bucket_id: process.env.JAMSTACK_APP_BUCKET_ID || "5f3a28905abde300082e4a96",
    read_key: process.env.JAMSTACK_APP_BUCKET_READ_KEY || "K8crdAJF2uxh5FsZjqGNIXGUMewH8j1VCXurrU8yYxhTC9QHqc",
    write_key: process.env.JAMSTACK_APP_BUCKET_WRITE_KEY || "Ay1bBWNuYkogGJl0JNTieWueb4QuhlLAYu25VKziRiybsjEl7l",
    url: "https://api.cosmicjs.com/v1/"
  }
  export default config;
