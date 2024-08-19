import * as web3 from "@solana/web3.js";
import "dotenv/config";
import {
  getKeypairFromEnvironment,
  airdropIfRequired,
} from "@solana-developers/helpers";

try {
  const payer = getKeypairFromEnvironment("SECRET_KEY");
  const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

  const balanceInLamports = await connection.getBalance(payer.publicKey);
  const balanceInSOL = balanceInLamports / web3.LAMPORTS_PER_SOL;

  console.log(
    `💰 Finished! The balance for the wallet at address ${payer.publicKey} is ${balanceInSOL}!`
  );
} catch (error) {
  console.log(error);
}
