const config = {
    bucket_name: process.env.JAMSTACK_APP_BUCKET_SLUG || "Vassfazék App",
    bucket_slug: process.env.JAMSTACK_APP_BUCKET_SLUG || "vassfazek-app",
    bucket_id: process.env.JAMSTACK_APP_BUCKET_ID || "5f3a2d8237f421000882e3f6",
    read_key: process.env.JAMSTACK_APP_BUCKET_READ_KEY || "1IE5T6MZIX9Tvocyyo7RpEJFLwrL94znxvu3zWkp6YN2Cy3e6e",
    write_key: process.env.JAMSTACK_APP_BUCKET_WRITE_KEY || "W7uhMsdxgEtGvurtHgsQtFbo1E5zUXvPtenNhTEB9BGNttAG9P",
    url: "https://api.cosmicjs.com/v1/"
  }
  export default config;
