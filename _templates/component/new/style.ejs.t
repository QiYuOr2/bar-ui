---
to: src/components/<%= h.changeCase.lcFirst(name) %>/index.less
---
@import '../variable.less';

.bar-<%= h.changeCase.lcFirst(name) %>{
  color: @text-color;
}