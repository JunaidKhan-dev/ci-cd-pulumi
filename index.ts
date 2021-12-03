import * as aws from "@pulumi/aws"
import * as awsx from "@pulumi/awsx"
import * as pulumi from "@pulumi/pulumi"

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket", { acl: "public-read" })

const examplebucketObject = new aws.s3.BucketObject("bg-image", {
  key: "bg-image-1",
  bucket: bucket.id,
  source: new pulumi.asset.FileAsset("images/Image.png"),
  acl: "public-read",
})

// Export the name of the bucket
export const bucketName = bucket.id
