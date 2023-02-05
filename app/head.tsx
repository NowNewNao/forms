import {constants} from "@/util/constants";

export default function Head() {
  return (
    <>
      <title>{constants.projectName}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={constants.metaDescription} />
    </>
  )
}
