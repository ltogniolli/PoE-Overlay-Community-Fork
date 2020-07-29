class ScriptBase {
	constructor(...processArgs) {
		this.process = this.initProcess(...processArgs);
	}

	async initProcess(...args) {
		let process = await this.spawnProcess(...args);
		process.stdout.on('data', data => this.listener && this.listener({out: data.toString()}));
		process.stderr.on('data', data => this.listener && this.listener({err: data.toString()}));
		process.on('exit', () => this.process = new Promise(() => 0));
		return process;
	}

	async spawnProcess(...args) {
		/* override */
	}

	addListener(listener) {
		this.listener = listener;
	}

	async send(arg) {
		this.process.then(process =>
			process.stdin.write(arg + '\n'));
	}
}

module.exports = ScriptBase;
