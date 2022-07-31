import { apply, Rule, SchematicContext, template, Tree, mergeWith, url } from '@angular-devkit/schematics'
import { strings } from '@angular-devkit/core'
import { Schema } from '../schema'

export function copyThrottlerConfig(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const sourceTemplate = url('./configs')
    const sourceParameterizedTemplate = apply(sourceTemplate, [
      template({
        ttl: +options.ttl,
        limit: +options.limit,
        ...strings,
      }),
    ])

    return mergeWith(sourceParameterizedTemplate)(tree, context)
  }
}
