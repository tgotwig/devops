include .env

upAndRm:
	make up
	read -p "Press enter to remove the stack"
	make rm

up:
	aws cloudformation create-stack \
		--stack-name ${stack-name} \
		--profile ${profile} \
		--region ${region} \
		--template-body file://template.yaml \
		--parameters file://parameters.json

rm:
	aws cloudformation delete-stack \
		--stack-name ${stack-name} \
		--profile ${profile} \
		--region ${region}

getUrl:
	aws cloudformation describe-stacks \
		--stack-name ${stack-name} \
		--profile ${profile} \
		--region ${region} \
		--query "Stacks[0].Outputs[?OutputKey=='URL'].OutputValue" \
		--output text
