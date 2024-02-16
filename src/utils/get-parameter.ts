import { fetchReadOnlyFunction } from 'micro-stacks/api';
import { stringAsciiCV } from 'micro-stacks/clarity';
import { stacksNetwork } from './constants';

export async function getParameter(
	contractAddress: string,
	parameterName: string,
) {
	try {
		const network = new stacksNetwork();
		const parameter = await fetchReadOnlyFunction({
			network,
			contractAddress: contractAddress.split('.')[0],
			contractName: contractAddress.split('.')[1],
			senderAddress: contractAddress,
			functionArgs: [stringAsciiCV(parameterName)],
			functionName: 'get-parameter',
		});
		return parameter;
	} catch (e: any) {
		console.error({ e });
	}
}
