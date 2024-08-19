import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import * as web3 from "@solana/web3.js";

const payer = getKeypairFromEnvironment("SECRET_KEY");
const connection = new web3.Connection(web3.clusterApiUrl("devnet"));
const transaction = new web3.Transaction();

const recipient = '7JktDP2c362rBaLQYaagFvYjFZDfW98GZLU3c8BkNu8M'

const sendSolInstruction = web3.SystemProgram.transfer({
  fromPubkey: payer.publicKey,
  toPubkey: new web3.PublicKey(recipient),
  lamports: web3.LAMPORTS_PER_SOL * 0.1,
});

transaction.add(sendSolInstruction);

const signature = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [payer],
);

console.log(`✅ Transaction completed! Signature is ${signature}`);
