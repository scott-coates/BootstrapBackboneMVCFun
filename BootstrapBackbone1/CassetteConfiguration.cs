using System.Text.RegularExpressions;
using Cassette.Configuration;
using Cassette.HtmlTemplates;
using Cassette.Scripts;
using Cassette.Stylesheets;

namespace BootstrapBackbone1
{
    /// <summary>
    /// Configures the Cassette asset modules for the web application.
    /// </summary>
    public class CassetteConfiguration : ICassetteConfiguration
    {
        public void Configure(BundleCollection bundles, CassetteSettings settings)
        {
            // TODO: Configure your bundles here...
            // Please read http://getcassette.net/documentation/configuration

            // This default configuration treats each file as a separate 'bundle'.
            // In production the content will be minified, but the files are not combined.
            // So you probably want to tweak these defaults!
            //bundles.AddPerIndividualFile<StylesheetBundle>("Content");
            //bundles.AddPerIndividualFile<ScriptBundle>("Scripts");

            bundles.Add<ScriptBundle>("Content/app");

            bundles.Add<StylesheetBundle>("Content/assets/css");
            bundles.Add<HtmlTemplateBundle>("Content/assets/templates", bundle => bundle.Processor = new HoganPipeline());
            bundles.AddPerSubDirectory<ScriptBundle>("Content/assets/js");
            
            bundles.Add<ScriptBundle>("Scripts", new FileSearch { Exclude = new Regex("_references.js|-vsdoc\\.js$")});

            // To combine files, try something like this instead:
            //   bundles.Add<StylesheetBundle>("Content");
            // In production mode, all of ~/Content will be combined into a single bundle.

            // If you want a bundle per folder, try this:
            //   bundles.AddPerSubDirectory<ScriptBundle>("Scripts");
            // Each immediate sub-directory of ~/Scripts will be combined into its own bundle.
            // This is useful when there are lots of scripts for different areas of the website.

            // *** TOP TIP: Delete all ".min.js" files now ***
            // Cassette minifies scripts for you. So those files are never used.
        }
    }
}