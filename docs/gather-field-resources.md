# Gathering field resource graph data

Use this checklist when adding fields, connections, and learning resources to `storage/data`.

## 1. Pick fields

- Add broad, searchable fields first, such as `computer-science`, `mathematics`, or `biology`.
- Use a stable kebab-case `id` and a short `name` that a learner is likely to type.
- Write a neutral one or two sentence `description` that explains the field without hype.
- Add `aliases` for common abbreviations, spelling variants, or subfield names.

## 2. Map connections

- Create a connection when two fields share methods, prerequisites, major applications, or historical overlap.
- Store each connection once as an undirected edge with `source`, `target`, and `relationship`.
- Use `strength` from `0` to `1` only when you have enough confidence to rank edge importance.
- Avoid connecting everything to everything; the graph should help learners see meaningful paths.

## 3. Collect resources

For each field, gather at least one item from each preferred category:

- `ebook`: a full online book or open textbook.
- `pdf`: a direct PDF, PDF landing page, or official printable text.
- `lecture` or `course`: a lecture series, course site, or recorded class.

When possible, prefer resources that are:

- From universities, public institutions, authors, publishers, or well-known educational projects.
- Freely accessible without piracy or suspicious mirrors.
- Clear about level, prerequisites, authorship, and licensing.
- Stable enough to link from a static site.

## 4. Verify before saving

Before adding a resource to `storage/data`:

1. Open the link and confirm it loads.
2. Confirm the title, provider, and resource type match the page.
3. Check whether access is free, paid, or limited.
4. Record license and level when visible.
5. Do not link to unauthorized copies of copyrighted books or lectures.

## 5. Suggested data workflow

1. Draft new entries in a temporary notes file.
2. Normalize ids and resource types against `storage/data/schema.json`.
3. Add or update the JSON data file used by the site.
4. Validate the data against the schema.
5. Test the resource explorer by searching each new field and clicking every new link.

## Example entry

```json
{
  "id": "computer-science",
  "name": "Computer Science",
  "description": "Core ideas behind computation, algorithms, systems, and software.",
  "aliases": ["cs", "programming"],
  "graph": { "x": 50, "y": 35 },
  "resources": [
    {
      "title": "CS50: Introduction to Computer Science",
      "type": "lecture",
      "url": "https://cs50.harvard.edu/x/",
      "provider": "Harvard University",
      "level": "beginner"
    }
  ]
}
```
