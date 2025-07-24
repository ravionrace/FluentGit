import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '308c87997d614b7ab8750b30990910ae'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '33443f48601845aa980365e6d207cecc'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'bc66e26a349d45b68fa93cf390aab33b'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '6e2d9d0683224fc0b0e5627f5b6e1939'
                    }
                    generated0: {
                        table: 'sys_ws_definition'
                        id: '5a7eaa534726a2508295f19f016d43a0'
                    }
                    generated1: {
                        table: 'sys_ws_operation'
                        id: '1e8e6e534726a2508295f19f016d4304'
                    }
                }
            }
        }
    }
}
