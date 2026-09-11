# Practical Precip: datasets

A shared catalog of precipitation datasets, observations, reanalyses and model collections. Each record has editable YAML facts and a Markdown guidance page.

## Contribute without installing anything

1. Open the [content index](INDEX.md) and choose a topic or dataset.
2. Open its guidance page and click the pencil icon on GitHub.
3. Edit the prose below the second `---` line. Add a paper or provider link where
   it supports a claim. The text between the `---` lines describes the review
   status and should stay in place.
4. Preview your edit, then choose **Commit changes** or **Propose changes**.
   Choose a new branch if GitHub offers one. If you do not have write access,
   GitHub will offer to create a fork, your own copy for the proposed change.
5. Open a pull request, which is a request for a maintainer to review the edit.
   Explain what you changed and why. You do not need to publish the website.

For metadata, choose the YAML link in the index. Edit the text after a field
name, keeping indentation and field names intact. Unknown values can stay
unknown. See [field guidance](FIELDS.md) and the [contribution guide](CONTRIBUTING.md).
If editing a file is uncomfortable, [suggest a correction](https://github.com/practical-precip/datasets/issues/new?template=correction.yml).
A maintainer can turn the suggestion into an edit.

## For technical contributors

Fork this repository, clone your fork, and work on a branch. Node.js 22.13 or
newer is only needed for local checks:

```sh
git clone https://github.com/YOUR-USERNAME/datasets.git
cd datasets
git switch -c improve-guidance
npm ci
npm run check
npm test
```

Edit the Markdown and YAML files, rerun the checks, commit and push your branch,
then open a pull request against `practical-precip/datasets`. GitHub also runs the
checks on pull requests, so online contributors do not need Node or Git.

## How the site uses this repository

The [website repository](https://github.com/practical-precip/pcef_workshop_site_mockup)
selects a specific commit of this repository. A content edit is reviewed here
first. A site maintainer then updates that selected commit, checks the preview,
and publishes the site. Merging here does not immediately change the live site.
The files are independent of the website framework and can be reused by other
applications. Content contributors do not need to understand submodules.

Scientific recommendations are drafts unless a named expert review is recorded.
Automated checks validate structure and links between files, not scientific skill.
See [content origin](notes/origin.md) for provenance and licensing status.
