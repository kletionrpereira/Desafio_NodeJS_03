import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

const readlineSync = require('readline-sync');

dotenv.config();

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	const quantidaDeAlunos = readlineSync.question(' Quantos alunos tem? ');
	let maiorNota = 0;
	let alunoComMaiorNota = 'Jose'; 

	for (let i = 0; i < quantidaDeAlunos; i++) {
		const nomeDoAluno = readlineSync.question(' Qual o nome do aluno? ');
		const notaDoAluno = readlineSync.question(' Qual a nota do aluno? ');

		if (notaDoAluno > maiorNota) {
			maiorNota = notaDoAluno
			alunoComMaiorNota = nomeDoAluno;
		}

	}
	console.log("O aluno com maior nota é: " + alunoComMaiorNota);
	console.log("Nota do " + alunoComMaiorNota + "; " + maiorNota);	

});

