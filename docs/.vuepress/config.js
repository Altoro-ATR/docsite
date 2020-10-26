module.exports = {
    base : '/',
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            title:"Altoro",
            lang: 'en-US',
            description: 'High performance customizable blockchain open platform'
        },   
        '/zh/': {
            title:"Altoro",
            lang: 'zh-CN',
            description: '高性能可定制区块链开放平台'
        }
    },
    head:[
    ['link', { rel: 'icon', href: "/favicon.ico" }]
    ],
    themeConfig : {
        repo: 'Altoro-ATR/docsite/',
        editLinks: false,
        docsDir: 'docs',
        docsBranch: 'master',
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                nav:[
                {text:"Guide",link:"/Guide/"},
                {text:"Develop",link:"/Docs/"}
                ],
                sidebar: {
                    "/Guide/":[
                        {
                            title: 'Guide',
                            collapsable:false,
                            children: [
                            '',
                            'altorodeal',
                            'dajiannode',
                            'wallte',
                            ]
                        }
                    ],
                    "/Docs/":[
                        {   
                            title: 'Development Manual',
                            collapsable:false,
                            children: [
                             "",
                             'userabout',
                             'supernode',
                            ]
                        },
                        // {   
                        //     title: 'Interface',
                        //     collapsable:false,
                        //     children: [
                        //     '',
                        //     'g_quickstart',
                        //     ]
                        // },
                        // {
                        //     title: 'ChainBox',
                        //     collapsable:false,
                        //     children: [
                        //     '',
                        //     'g_quickstart',
                        //     ]
                        // },
                        // {
                        //     title: 'Smart Contract',
                        //     collapsable:false,
                        //     children: [
                        //     '',
                        //     'g_quickstart',
                        //     ]
                        // }
                    ]
                }
            },
            '/zh/': {
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                nav:[
                {text:"操作指南",link:"/zh/Guide/"},
                {text:"开发手册",link:"/zh/Docs/"}
                ],
                sidebar: {
                    "/zh/Guide/":[
                        {
                            title: '操作指南',
                            collapsable:false,
                            children: [
                                '',
                                'altorodeal',
                                'dajiannode',
                                'wallte',
                            ]
                        }
                    ],
                   "/zh/Docs/":[
                        {   
                            title: '开发手册',
                            collapsable:false,
                            children: [
                             "",
                             'userabout',
                             'supernode',
                            ]
                        },
                        // {   
                        //     title: '接口文档',
                        //     collapsable:false,
                        //     children: [
                        //     '',
                        //     'g_quickstart',
                        //     ]
                        // },
                        // {
                        //     title: 'ChainBox',
                        //     collapsable:false,
                        //     children: [
                        //     '',
                        //     'g_quickstart',
                        //     ]
                        // },
                        // {
                        //     title: '智能合约',
                        //     collapsable:false,
                        //     children: [
                        //     '',
                        //     'g_quickstart',
                        //     ]
                        // }
                    ]
                }
            }
        }
    }
}



