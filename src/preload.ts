// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import {contextBridge, ipcRenderer} from "electron";
import {write, read, exists} from "fs-jetpack"
// eslint-disable-next-line import/no-unresolved
import {WritableData, WriteOptions} from "fs-jetpack/types.d.js";


// Eksponujemy funkcje IPC w bezpieczny sposób w kontekście renderera
contextBridge.exposeInMainWorld('electronAPI', {
    openFolderDialog: () => ipcRenderer.invoke('dialog:openFolder'),
    //fs-jetpack
    write: (path: string, data: WritableData, options?: WriteOptions) => write(path, data, options),
    read: (path: string) => read(path),
    exists: (path: string) => exists(path)



});
