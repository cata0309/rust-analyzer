var N = null;var sourcesIndex = {};
sourcesIndex["arena"] = {"name":"","files":["lib.rs","map.rs"]};
sourcesIndex["assists"] = {"name":"","dirs":[{"name":"handlers","files":["add_explicit_type.rs","add_missing_impl_members.rs","add_turbo_fish.rs","apply_demorgan.rs","auto_import.rs","change_visibility.rs","convert_integer_literal.rs","early_return.rs","expand_glob_import.rs","extract_struct_from_enum_variant.rs","extract_variable.rs","fill_match_arms.rs","fix_visibility.rs","flip_binexpr.rs","flip_comma.rs","flip_trait_bound.rs","generate_default_from_enum_variant.rs","generate_derive.rs","generate_from_impl_for_enum.rs","generate_function.rs","generate_impl.rs","generate_new.rs","infer_function_return_type.rs","inline_function.rs","inline_local_variable.rs","introduce_named_lifetime.rs","invert_if.rs","merge_imports.rs","merge_match_arms.rs","move_bounds.rs","move_guard.rs","move_module_to_file.rs","pull_assignment_up.rs","qualify_path.rs","raw_string.rs","remove_dbg.rs","remove_mut.rs","remove_unused_param.rs","reorder_fields.rs","replace_derive_with_manual_impl.rs","replace_if_let_with_match.rs","replace_impl_trait_with_generic.rs","replace_let_with_if_let.rs","replace_qualified_name_with_use.rs","replace_string_with_char.rs","replace_unwrap_with_match.rs","split_import.rs","toggle_ignore.rs","unwrap_block.rs","wrap_return_type_in_result.rs"]},{"name":"utils","files":["import_assets.rs"]}],"files":["assist_config.rs","assist_context.rs","ast_transform.rs","lib.rs","utils.rs"]};
sourcesIndex["base_db"] = {"name":"","files":["cancellation.rs","change.rs","fixture.rs","input.rs","lib.rs"]};
sourcesIndex["cfg"] = {"name":"","files":["cfg_expr.rs","dnf.rs","lib.rs"]};
sourcesIndex["completion"] = {"name":"","dirs":[{"name":"completions","dirs":[{"name":"postfix","files":["format_like.rs"]}],"files":["attribute.rs","dot.rs","fn_param.rs","keyword.rs","macro_in_item_position.rs","mod_.rs","pattern.rs","postfix.rs","qualified_path.rs","record.rs","snippet.rs","trait_impl.rs","unqualified_path.rs"]},{"name":"render","files":["builder_ext.rs","const_.rs","enum_variant.rs","function.rs","macro_.rs","pattern.rs","type_alias.rs"]}],"files":["completions.rs","config.rs","context.rs","generated_lint_completions.rs","item.rs","lib.rs","patterns.rs","render.rs"]};
sourcesIndex["flycheck"] = {"name":"","files":["lib.rs"]};
sourcesIndex["hir"] = {"name":"","dirs":[{"name":"semantics","files":["source_to_def.rs"]}],"files":["attrs.rs","code_model.rs","db.rs","diagnostics.rs","from_id.rs","has_source.rs","lib.rs","semantics.rs","source_analyzer.rs"]};
sourcesIndex["hir_def"] = {"name":"","dirs":[{"name":"body","files":["diagnostics.rs","lower.rs","scope.rs"]},{"name":"item_tree","files":["lower.rs"]},{"name":"nameres","files":["collector.rs","mod_resolution.rs","path_resolution.rs"]},{"name":"path","dirs":[{"name":"lower","files":["lower_use.rs"]}],"files":["lower.rs"]}],"files":["adt.rs","attr.rs","body.rs","builtin_attr.rs","builtin_type.rs","child_by_source.rs","data.rs","db.rs","diagnostics.rs","dyn_map.rs","expr.rs","find_path.rs","generics.rs","import_map.rs","item_scope.rs","item_tree.rs","keys.rs","lang_item.rs","lib.rs","nameres.rs","path.rs","per_ns.rs","resolver.rs","src.rs","trace.rs","type_ref.rs","visibility.rs"]};
sourcesIndex["hir_expand"] = {"name":"","files":["ast_id_map.rs","builtin_derive.rs","builtin_macro.rs","db.rs","diagnostics.rs","eager.rs","hygiene.rs","lib.rs","name.rs","proc_macro.rs","quote.rs"]};
sourcesIndex["hir_ty"] = {"name":"","dirs":[{"name":"diagnostics","dirs":[{"name":"decl_check","files":["case_conv.rs"]}],"files":["decl_check.rs","expr.rs","match_check.rs","unsafe_check.rs"]},{"name":"infer","files":["coerce.rs","expr.rs","pat.rs","path.rs","unify.rs"]},{"name":"traits","dirs":[{"name":"chalk","files":["interner.rs","mapping.rs","tls.rs"]}],"files":["chalk.rs"]}],"files":["autoderef.rs","db.rs","diagnostics.rs","display.rs","infer.rs","lib.rs","lower.rs","method_resolution.rs","op.rs","primitive.rs","traits.rs","utils.rs"]};
sourcesIndex["ide"] = {"name":"","dirs":[{"name":"diagnostics","files":["field_shorthand.rs","fixes.rs"]},{"name":"display","files":["navigation_target.rs","short_label.rs"]},{"name":"references","files":["rename.rs"]},{"name":"syntax_highlighting","files":["format.rs","html.rs","injection.rs","macro_rules.rs","tags.rs"]},{"name":"typing","files":["on_enter.rs"]}],"files":["call_hierarchy.rs","diagnostics.rs","display.rs","doc_links.rs","expand_macro.rs","extend_selection.rs","file_structure.rs","fn_references.rs","folding_ranges.rs","goto_definition.rs","goto_implementation.rs","goto_type_definition.rs","hover.rs","inlay_hints.rs","join_lines.rs","lib.rs","markdown_remove.rs","markup.rs","matching_brace.rs","parent_module.rs","prime_caches.rs","references.rs","runnables.rs","status.rs","syntax_highlighting.rs","syntax_tree.rs","typing.rs","view_hir.rs"]};
sourcesIndex["ide_db"] = {"name":"","dirs":[{"name":"helpers","files":["insert_use.rs"]}],"files":["apply_change.rs","call_info.rs","defs.rs","helpers.rs","imports_locator.rs","label.rs","lib.rs","line_index.rs","search.rs","source_change.rs","symbol_index.rs","traits.rs","ty_filter.rs"]};
sourcesIndex["mbe"] = {"name":"","dirs":[{"name":"mbe_expander","files":["matcher.rs","transcriber.rs"]}],"files":["lib.rs","mbe_expander.rs","parser.rs","subtree_source.rs","syntax_bridge.rs","tt_iter.rs"]};
sourcesIndex["parser"] = {"name":"","dirs":[{"name":"grammar","dirs":[{"name":"expressions","files":["atom.rs"]},{"name":"items","files":["adt.rs","consts.rs","traits.rs","use_item.rs"]}],"files":["attributes.rs","expressions.rs","items.rs","params.rs","paths.rs","patterns.rs","type_args.rs","type_params.rs","types.rs"]},{"name":"syntax_kind","files":["generated.rs"]}],"files":["event.rs","grammar.rs","lib.rs","parser.rs","syntax_kind.rs","token_set.rs"]};
sourcesIndex["paths"] = {"name":"","files":["lib.rs"]};
sourcesIndex["proc_macro_api"] = {"name":"","files":["lib.rs","msg.rs","process.rs","rpc.rs"]};
sourcesIndex["proc_macro_srv"] = {"name":"","dirs":[{"name":"proc_macro","dirs":[{"name":"bridge","files":["buffer.rs","client.rs","closure.rs","handle.rs","mod.rs","rpc.rs","scoped_cell.rs","server.rs"]}],"files":["diagnostic.rs","mod.rs"]}],"files":["cli.rs","dylib.rs","lib.rs","rustc_server.rs"]};
sourcesIndex["proc_macro_test"] = {"name":"","files":["lib.rs"]};
sourcesIndex["profile"] = {"name":"","files":["hprof.rs","lib.rs","memory_usage.rs","stop_watch.rs","tree.rs"]};
sourcesIndex["project_model"] = {"name":"","files":["cargo_workspace.rs","cfg_flag.rs","lib.rs","project_json.rs","sysroot.rs","workspace.rs"]};
sourcesIndex["rust_analyzer"] = {"name":"","dirs":[{"name":"cli","files":["analysis_bench.rs","analysis_stats.rs","diagnostics.rs","load_cargo.rs","progress_report.rs","ssr.rs"]},{"name":"diagnostics","files":["to_proto.rs"]}],"files":["caps.rs","cargo_target_spec.rs","cli.rs","config.rs","diagnostics.rs","diff.rs","dispatch.rs","document.rs","from_proto.rs","global_state.rs","handlers.rs","lib.rs","line_endings.rs","lsp_ext.rs","lsp_utils.rs","main_loop.rs","markdown.rs","reload.rs","request_metrics.rs","semantic_tokens.rs","thread_pool.rs","to_proto.rs"]};
sourcesIndex["ssr"] = {"name":"","files":["errors.rs","lib.rs","matching.rs","nester.rs","parsing.rs","replacing.rs","resolving.rs","search.rs"]};
sourcesIndex["stdx"] = {"name":"","files":["lib.rs","macros.rs","panic_context.rs"]};
sourcesIndex["syntax"] = {"name":"","dirs":[{"name":"ast","dirs":[{"name":"generated","files":["nodes.rs","tokens.rs"]}],"files":["edit.rs","expr_ext.rs","generated.rs","make.rs","node_ext.rs","token_ext.rs","traits.rs"]},{"name":"parsing","files":["lexer.rs","reparsing.rs","text_token_source.rs","text_tree_sink.rs"]},{"name":"validation","files":["block.rs"]}],"files":["algo.rs","ast.rs","display.rs","fuzz.rs","lib.rs","parsing.rs","ptr.rs","syntax_error.rs","syntax_node.rs","validation.rs"]};
sourcesIndex["test_utils"] = {"name":"","files":["fixture.rs","lib.rs","mark.rs"]};
sourcesIndex["text_edit"] = {"name":"","files":["lib.rs"]};
sourcesIndex["toolchain"] = {"name":"","files":["lib.rs"]};
sourcesIndex["tt"] = {"name":"","files":["buffer.rs","lib.rs"]};
sourcesIndex["vfs"] = {"name":"","files":["anchored_path.rs","file_set.rs","lib.rs","loader.rs","path_interner.rs","vfs_path.rs"]};
sourcesIndex["vfs_notify"] = {"name":"","files":["lib.rs"]};
sourcesIndex["xtask"] = {"name":"","dirs":[{"name":"codegen","files":["gen_assists_docs.rs","gen_diagnostic_docs.rs","gen_feature_docs.rs","gen_lint_completions.rs","gen_parser_tests.rs","gen_syntax.rs"]}],"files":["ast_src.rs","codegen.rs","dist.rs","install.rs","lib.rs","metrics.rs","pre_cache.rs","pre_commit.rs","release.rs"]};
createSourceSidebar();
