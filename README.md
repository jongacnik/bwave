# bwave

**bwave** a.k.a **brainwave** a.k.a command line notes.

Originally fork of [Ajour](https://github.com/gopatrik/ajour)

## Install

```bash
npm i bwave -g
```

## Usage

Make entry:

```bash
bwave A brainwave
```

Will create **bwave.md** (if no existy) in the current directory with entry appended.

**bwave.md**:
```markdown
## Sun Sep 13 2015 15:49:33 GMT-0700 (PDT)

A brainwave
```

### Tailing
Tail onto previous entry with `-t` flag (no timestamp):

```bash
$ bwave A brainwave
$ bwave Another brainwave -t
```

**bwave.md**:
```markdown
## Sun Sep 13 2015 15:49:33 GMT-0700 (PDT)

A brainwave

Another brainwave
```

### Global
By default bwave writes to current directory. Write to secret log in module directory with `-g` flag:

```bash
bwave A secret brainwave -g
```

### Viewing
You can output the contents of **bwave.md** by running without a message:

```bash
$ bwave
```

Adding `-g` flag will output contents of global log:

```bash
$ bwave -g
```

### Flags
```
-t    -- Tail onto previous note (no timestamp)
-g    -- Global log file (located in module directory)
```

## Todo
- config options
- prepend option