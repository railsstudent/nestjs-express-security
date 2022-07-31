import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics'
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks'
import { installDependencies } from './helpers'

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function nestjsSecurity(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask())
    return chain([
      installDependencies(),
    ])
  }
}
