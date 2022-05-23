const data = {
    name: 'root',
    isFolder : true,
    items: [
        {
            name: 'src',
            isFolder: true,
            items: [
                {
                    name: 'data',
                    isFolder: true,
                    items:[
                        {
                            name: 'folderData',
                            isFolder: false,
                        }
                    ]
                },
                {
                    name: 'app.js',
                    isFolder: false,
                }
            ]
        },
        {
            name: 'package.json',
            isFolder: false,
        }
    ]
}

export default data;