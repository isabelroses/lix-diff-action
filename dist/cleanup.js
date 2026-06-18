import { B as logInfo, J as runPromise, R as gen, Sr as __toESM, Z as sync, dr as require_core, j as catchAll, n as removeWorktree } from "./assets/git-BC-2Bbl9.js";
var import_core = /* @__PURE__ */ __toESM(require_core(), 1);
var cleanup = gen(function* () {
	const worktreePath = yield* sync(() => import_core.getState("worktreePath"));
	if (!worktreePath) {
		yield* logInfo("No worktree path saved, skipping cleanup");
		return;
	}
	yield* removeWorktree(worktreePath);
	yield* logInfo(`Cleaned up worktree at ${worktreePath}`);
});
const run = () => cleanup.pipe(catchAll((error) => sync(() => import_core.warning(`Cleanup failed: ${error}`))), runPromise);
run();
export { run };

//# sourceMappingURL=cleanup.js.map