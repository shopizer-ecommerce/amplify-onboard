# Getting Started with Amplify CLI
This directory was generated by [Amplify CLI](https://docs.amplify.aws/cli).

Helpful resources:
- Amplify documentation: https://docs.amplify.aws
- Amplify CLI documentation: https://docs.amplify.aws/cli
- More details on this folder & generated files: https://docs.amplify.aws/cli/reference/files
- Join Amplify's community: https://amplify.aws/community/


Export data to scv

https://stackoverflow.com/questions/33357821/export-a-dynamodb-table-as-csv-through-aws-cli-without-using-pipeline

aws dynamodb scan --table-name User-44tkvfrmqjcrddwhwpveyk56zu-dev --select ALL_ATTRIBUTES --page-size 500 --max-items 100000 --output json | jq -r '.Items' | jq -r '(.[0] | keys_unsorted) as $keys | $keys, map([.[ $keys[] ].S])[] | @csv' > export.my-table.csv