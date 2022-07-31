import { NodeDependency, NodeDependencyType } from '@schematics/angular/utility/dependencies'

export const helmetDep: NodeDependency = {
  name: 'helmet',
  type: NodeDependencyType.Default,
  version: '~5.1.1',
}

export const expressDep: NodeDependency = {
  name: 'express',
  type: NodeDependencyType.Default,
  version: '~4.18.1',
}

export const typesExpress: NodeDependency = {
  name: '@types/express',
  type: NodeDependencyType.Dev,
  version: '~4.17.13',
}

export const compressionDep: NodeDependency = {
  name: 'compression',
  type: NodeDependencyType.Default,
  version: '~1.7.4',
}

export const typesCompression: NodeDependency = {
  name: '@types/compression',
  type: NodeDependencyType.Dev,
  version: '~1.7.2',
}

export const classValidatorDep: NodeDependency = {
  name: 'class-validator',
  type: NodeDependencyType.Default,
  version: '~0.13.2',
}

export const classTransformerDep: NodeDependency = {
  name: 'class-transformer',
  type: NodeDependencyType.Default,
  version: '~0.5.1',
}
