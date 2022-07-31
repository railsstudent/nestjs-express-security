import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics'
import { addPackageJsonDependency, getPackageJsonDependency, NodeDependency } from '@schematics/angular/utility/dependencies'
import {
  helmetDep,
  compressionDep,
  typesCompression,
  expressDep,
  typesExpress,
  classValidatorDep,
  classTransformerDep,
  throttlerDep,
} from '../constants'

export function installDependencies(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const dependencies: NodeDependency[] = [
      helmetDep,
      compressionDep,
      typesCompression,
      expressDep,
      typesExpress,
      classTransformerDep,
      classValidatorDep,
      throttlerDep,
    ]
    addDependencies(tree, context, Array.from(dependencies))
    return tree
  }
}

function addDependencies(tree: Tree, context: SchematicContext, dependencies: NodeDependency[]) {
  const pkgPath = 'package.json'
  for (const dependency of dependencies) {
    const result = getPackageJsonDependency(tree, dependency.name, pkgPath)
    if (!result) {
      addPackageJsonDependency(tree, dependency)
      context.logger.info(`Added ${dependency.name}@${dependency.version}`)
    } else {
      context.logger.info(`Found ${dependency.name}@${dependency.version}, do not add dependency`)
    }
  }
}
