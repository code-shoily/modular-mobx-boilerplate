import os
import sys

def to_kebab_case(snake_str):
    return snake_str.replace("_", "-").lower()


def to_camel_case(snake_str):
    components = to_kebab_case(snake_str).split('-')
    return components[0] + "".join(x.title() for x in components[1:])


def to_pascal_case(snake_str):
    components = to_kebab_case(snake_str).split('-')
    return "".join(x.title() for x in components)


def code_table(app):
    app_base = """
import React, {{Component}} from 'react'

import BasePage from '../../base/components/BasePage'


export default class {0}Base extends Component {{
  render() {{
    return <BasePage children={{this.props.children}} />
  }}
}}

{0}Base.propTypes = {{
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
}}
    """.format(to_pascal_case(app))

    app_page = """
import React, {{Component}} from 'react'
import {{StyleSheet, css}} from 'aphrodite'

import {{observer, inject}} from 'mobx-react'


@inject('{0}Model')
@observer
export default class {1}Page extends Component {{
  render() {{
    let {0}Model = this.props.{0}Model

    let S = StyleSheet.create({{}})

    return (
      <div className={{css(S.container)}}>
        HELLO {1}
      </div>
    )
  }}
}}

{1}Page.propTypes = {{
  {0}Model: React.PropTypes.object,
}}
    """.format(to_camel_case(app), to_pascal_case(app))

    app_model = """
import {{observable, action}} from 'mobx'
import remotedev from 'mobx-remotedev'


@remotedev
export default class {1}Model {{
  @observable info 

  constructor(info=0) {{
    this.info = info
  }}
}}

export const {0}Model = new {1}Model()
    """.format(to_camel_case(app), to_pascal_case(app))


    router = """
import React from 'react'
import {{ Route, IndexRoute }} from 'react-router'

import {0}Base from './components/{0}Base'
import {0}Page from './components/{0}Page'

const {1}Routes = (
  <Route path="/{2}" component={{ {0}Base }}>
    <IndexRoute component={{ {0}Page }} />
  </Route>
)

export default {1}Routes
    """.format(to_pascal_case(app), to_camel_case(app), to_kebab_case(app).lower())

    return {
        "routes.js": router,
        "models/{}.js".format(to_kebab_case(app)): app_model,
        "components/{}Base.jsx".format(to_pascal_case(app)): app_base,
        "components/{}Page.jsx".format(to_pascal_case(app)): app_page,
    }


def main():
    try:
        arg = sys.argv[1]
    except IndexError as _:
        print("Please Enter an app name")
        return

    app_folder = to_kebab_case(arg.lower())

    folders = ["models", "components"]

    files = ["routes.js", "models/{}.js".format(to_kebab_case(arg)), 
             "components/{}Base.jsx".format(to_pascal_case(arg)),
             "components/{}Page.jsx".format(to_pascal_case(arg))]
  
    res = os.system("mkdir src/{}".format(app_folder))
    if res == 256:
        print("App already exists, can't override")
        return

    for folder in folders:
        res = os.system("mkdir src/{}/{}".format(app_folder, folder))

        if res == 256:
            print("An error occured")
            os.system("rm -Rf src/{}".format(app_folder))  
        else:
            code_files = code_table(arg)

    for f in files:
        with file("src/{}/{}".format(app_folder, f), "w") as fin:
            fin.write(code_files[f])

    print("\n=== === Please add the following lines in the appropriate location in src/App.js === ===\n")
    print("\n/* ------ {} APP --- --- */\n".format(arg.upper()))
    print("import {}Routes from './{}/routes'".format(to_camel_case(arg), to_kebab_case(arg)))
    print("import {{{0}Model}} from './{1}/models/{1}'".format(to_camel_case(arg), to_kebab_case(arg)))
    print("\n=== === Add the stores and routers in appropriate locations as marked === ===\n")

if __name__ == "__main__":
    main()
