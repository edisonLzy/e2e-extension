import chokidar from 'chokidar';

type TestCaseWatcher = {
    root: string;
    onMetaInfoChanged: (metaInfo: unknown) => void;
}


let watcher: chokidar.FSWatcher | null = null;
export function testCaseWatcher(options: TestCaseWatcher) {

    const { onMetaInfoChanged, root } = options;

    if (watcher) {
        return;
    }
    
    watcher = chokidar.watch(root, {
        // 忽略所有非 .cy.ts 文件
        ignored: /(?<!\.cy)\.ts$/,
        ignoreInitial: true,
    });

    const onFileChange = () => {
        // TODO: 读取所有 .cy.ts 文件，生成 metaInfo
        const metaInfo = [];
        onMetaInfoChanged(metaInfo);
    }

    watcher.on('change', onFileChange)
    watcher.on('add', onFileChange)
    watcher.on('unlink', onFileChange)

    onFileChange()
}