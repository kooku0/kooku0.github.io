_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [10],
  {
    '/0+H': function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(a.AmpStateContext));
        });
      var r,
        o = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        a = n('lwAK');
      function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery,
          i = void 0 !== a && a;
        return n || (o && i);
      }
    },
    '0FOq': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, '__N_SSG', function () {
          return R;
        });
      var r = n('DZdY'),
        o = n('lO2I'),
        a = n('CVNw'),
        i = n.n(a),
        l = n('nOHt'),
        c = n('g4pe'),
        s = n.n(c),
        u = n('q1tI'),
        p = n.n(u),
        d = n('5wV8'),
        f = n('lM68'),
        m = n('AeFk'),
        b = f.a.color,
        h = n('crYB'),
        g = n('MYsR');
      var y = {
          name: 'rvjmcl',
          styles:
            "time{color:#9b9b9b;}p{line-height:1.5rem;margin:1rem 0 0 0;}a{font-size:1rem;color:#358cd6;text-decoration:underline;}h1{font-size:2rem;margin:2.5rem 0 0 0;}h2,h3,h4,h5{margin:1.5rem 0 0.5rem 0;line-height:1.25em;}h2::before{position:absolute;margin-left:-1em;font-weight:300;font-size:1.5rem;color:#9b9b9b;display:none;content:'#';}img{width:100%;}table{max-width:100%;border-spacing:0;margin-top:1.5rem;thead{background:#f7f7f7;}th{font-weight:500;}th,td{padding:0.5em 1em;border:1px double #eee;}}ul{list-style-type:disc;}ol{list-style-type:decimal;}ul ul,ol ul{list-style-type:circle;}blockquote{border-left:3px solid rgb(239, 240, 244);margin:15px 0;padding-left:16px;}blockquote p{margin-top:0;}ol,ul{padding:0 0 0 1.5rem;margin:1.5rem 0 0 0;margin:0;li{line-height:1.5rem;margin:0;}}.youtube-container{position:relative;width:100%;height:0;padding-bottom:56.25%;overflow:hidden;margin:20px 0;}.youtube-container iframe{width:100%;height:100%;position:absolute;top:0;left:0;}iframe{position:absolute;top:0;left:0;width:100%;height:100%;}p>code{padding:0.1rem 0.3rem;border-radius:4px;background-color:#f2f5fc;color:#275fc8;font-size:1rem;font-weight:bold;}pre{padding:1.2em;margin:1.5em 0;overflow:auto;border-radius:0.6em;color:#e0e0e0;background:#212121;font-family:'Consolas','Monaco','Andale Mono','Ubuntu Mono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.6;font-size:13px;-moz-tab-size:2;-o-tab-size:2;tab-size:2;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;-ms-overflow-style:none;overflow:-moz-scrollbars-none;}code[class*='language-'],pre[class*='language-']{color:#e0e0e0;background:none;font-family:'Consolas','Monaco','Andale Mono','Ubuntu Mono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.6;font-size:13px;-moz-tab-size:2;-o-tab-size:2;tab-size:2;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;-ms-overflow-style:none;overflow:-moz-scrollbars-none;}pre[class*='language-']::-webkit-scrollbar{display:none;}pre[class*='language-']{padding:1.2em;margin:1.5em 0;overflow:auto;border-radius:0.6em;}:not(pre)>code[class*='language-'],pre[class*='language-']{background:#212121;}:not(pre)>code[class*='language-']{padding:0.1em 0.6em;border-radius:0.2em;white-space:normal;background:$inline-dimmed-color;color:$inline-text-color;}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:#868282;}.token.punctuation{color:#e0e0e0;}pre[class*='language-'] .tag{color:#358cd6;}.token.attr-name{color:#6196cc;}.token.namespace,.token.deleted{color:#e2777a;}.token.function-name{color:#6196cc;}.token.boolean{color:#358cd6;}.token.number{color:#b5ce98;}.token.function{color:#dcdcaa;}.token.property,.token.class-name,.token.constant,.token.symbol{color:#4ec9b2;}.token.selector,.token.important,.token.atrule,.token.keyword,.token.builtin{color:#c586c0;}.token.string,.token.char,.token.attr-value,.token.regex,.token.variable{color:#ce9178;}.token.operator,.token.entity,.token.url{color:#67cdcc;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}.token.inserted{color:green;}"
        },
        v = n('vJKn'),
        k = n.n(v);
      function O(e, t, n, r, o, a, i) {
        try {
          var l = e[a](i),
            c = l.value;
        } catch (s) {
          return void n(s);
        }
        l.done ? t(c) : Promise.resolve(c).then(r, o);
      }
      var w = (function () {
        var e,
          t =
            ((e = k.a.mark(function e(t) {
              return k.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!navigator.share) {
                        e.next = 4;
                        break;
                      }
                      navigator.share(t), (e.next = 10);
                      break;
                    case 4:
                      return (e.next = 6), navigator.clipboard;
                    case 6:
                      if (!e.sent) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 9), navigator.clipboard.writeText(t.url);
                    case 9:
                      alert('Copy URI');
                    case 10:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, o) {
                var a = e.apply(t, n);
                function i(e) {
                  O(a, r, o, i, l, 'next', e);
                }
                function l(e) {
                  O(a, r, o, i, l, 'throw', e);
                }
                i(void 0);
              });
            });
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
      var x = n('qYWl');
      var j = Object(r.a)('div', { target: 'ep629fi13' })({
          name: 'bjn8wh',
          styles: 'position:relative'
        }),
        _ = Object(r.a)('nav', { target: 'ep629fi12' })(
          g.k,
          ' ',
          g.n,
          ' ',
          g.a,
          ' ',
          h.a,
          ' ',
          g.f,
          ' position:sticky;left:0;right:0;top:0;padding-left:16px;padding-right:16px;z-index:999;height:48px;',
          function (e) {
            return e.theme.media.desktop;
          },
          '{display:none;}'
        ),
        z = Object(r.a)('div', { target: 'ep629fi11' })({
          name: '100hv5s',
          styles: '&>img{margin-left:20px;}'
        }),
        S = Object(r.a)('img', { target: 'ep629fi10' })(''),
        M = Object(r.a)('article', { target: 'ep629fi9' })(''),
        C = Object(r.a)('section', { target: 'ep629fi8' })(
          h.a,
          ';position:relative;padding-bottom:32px;',
          function (e) {
            return e.theme.media.mobile;
          },
          '{margin:0 16px;}'
        ),
        E = Object(r.a)('div', { target: 'ep629fi7' })({
          name: '1d0nbku',
          styles: 'margin-top:24px'
        }),
        P = Object(r.a)('span', { target: 'ep629fi6' })(
          g.q,
          ' font-size:14px;font-weight:bold;line-height:1.57;margin-right:8px;'
        ),
        I = Object(r.a)('h1', { target: 'ep629fi5' })(
          g.o,
          ' margin:8px 0 24px 0;font-size:26px;font-weight:bold;line-height:1.2;'
        ),
        A = Object(r.a)('div', { target: 'ep629fi4' })(
          g.r,
          ' font-size:16px;font-weight:normal;line-height:1.63;min-height:320px;'
        ),
        N = Object(r.a)('div', { target: 'ep629fi3' })(y, ';'),
        T = Object(r.a)('div', { target: 'ep629fi2' })(
          g.l,
          ' ',
          g.m,
          ' width:100%;margin-top:48px;button{',
          g.k,
          ' ',
          g.a,
          ' ',
          g.m,
          ' width:240px;height:48px;border:none;margin:8px auto;border-radius:4px;font-size:16px;font-weight:bold;padding:16px;position:relative;}'
        ),
        q = Object(r.a)('button', { target: 'ep629fi1' })(
          function (e) {
            return e.isLike ? g.e : g.c;
          },
          ' ',
          function (e) {
            return e.isLike ? g.r : g.p;
          },
          ' margin-bottom:16px;&>svg{position:absolute;left:16px;}'
        ),
        H = Object(r.a)('button', { target: 'ep629fi0' })(
          g.e,
          ' ',
          g.r,
          ' &>img{position:absolute;left:16px;}'
        ),
        R = !0;
      t.default = function (e) {
        var t = e.post,
          n = t.content,
          r = t.cover,
          a = t.slug,
          c = t.title,
          f = t.tags,
          h = Object(u.useState)(!1),
          g = h[0],
          y = h[1],
          v = Object(l.useRouter)();
        Object(u.useEffect)(function () {
          try {
            var e;
            -1 !==
            JSON.parse(
              null !== (e = localStorage.getItem('likes')) && void 0 !== e ? e : '[]'
            ).indexOf(a)
              ? y(!0)
              : y(!1);
          } catch (t) {
            console.error(t);
          }
        }, []);
        var k = Object(u.useCallback)(
            function () {
              try {
                var e,
                  t = JSON.parse(
                    null !== (e = localStorage.getItem('likes')) && void 0 !== e ? e : '[]'
                  );
                g ? t.splice(t.indexOf(a), 1) : t.push(a),
                  localStorage.setItem('likes', JSON.stringify(t)),
                  y(!g);
              } catch (n) {
                console.error(n);
              }
            },
            [g]
          ),
          O = Object(u.useCallback)(function () {
            v.replace('/');
          }, []),
          R = Object(u.useCallback)(function () {
            var e = {
              title: c,
              text: ''.concat(c),
              url: ''.concat(window.location.origin, '/posts/').concat(a, '?shared=true')
            };
            w(e);
          }, []);
        return Object(m.c)(
          p.a.Fragment,
          null,
          Object(m.c)(
            s.a,
            null,
            Object(m.c)('title', null, ''.concat(x.a.title, ' - ').concat(c)),
            Object(m.c)('meta', {
              property: 'og:logo',
              content: ''.concat(x.a.siteUri, '/favicon.ico'),
              key: 'logo'
            }),
            Object(m.c)('meta', { property: 'og:title', content: c, key: 'title' }),
            Object(m.c)('meta', {
              property: 'og:image',
              content: ''.concat(x.a.siteUri).concat(r),
              key: 'image'
            }),
            Object(m.c)('meta', { property: 'og:image:width', content: '1200' }),
            Object(m.c)('meta', { property: 'og:image:height', content: '630' }),
            Object(m.c)('meta', { property: 'og:type', content: 'article', key: 'type' })
          ),
          Object(m.c)(
            j,
            null,
            Object(m.c)(
              _,
              null,
              Object(m.c)(
                'div',
                { role: 'button', tabIndex: 0, onClick: O },
                Object(m.c)(i.a, { path: o.a, size: '24', color: b.grey300 })
              ),
              Object(m.c)(
                z,
                { className: 'like-button' },
                Object(m.c)(S, {
                  role: 'button',
                  onClick: k,
                  src: g ? '/icon/like-on.svg' : '/icon/like-off.svg',
                  className: 'like-button',
                  alt: 'like',
                  height: '24',
                  width: '24'
                }),
                Object(m.c)(S, {
                  role: 'button',
                  onClick: R,
                  src: '/icon/share.svg',
                  alt: 'share',
                  height: '24',
                  width: '24'
                })
              )
            ),
            Object(m.c)(
              M,
              null,
              Object(m.c)(
                C,
                null,
                r && Object(m.c)(d.a, { src: r }),
                Object(m.c)(
                  E,
                  null,
                  null === f || void 0 === f
                    ? void 0
                    : f.map(function (e) {
                        var t = e.slug,
                          n = e.name;
                        return Object(m.c)(P, { key: t }, n);
                      })
                ),
                Object(m.c)('header', null, Object(m.c)(I, null, c)),
                Object(m.c)(A, null, Object(m.c)(N, { dangerouslySetInnerHTML: { __html: n } })),
                Object(m.c)(
                  T,
                  null,
                  Object(m.c)(
                    q,
                    { onClick: k, isLike: g, className: 'like-button' },
                    Object(m.c)(i.a, {
                      className: 'like-button',
                      path: g ? o.b : o.c,
                      color: g ? b.grey40 : b.blue300,
                      size: '20'
                    }),
                    'LIKE'
                  ),
                  Object(m.c)(
                    H,
                    { onClick: R, className: 'share-button' },
                    Object(m.c)(S, {
                      src: '/icon/share.svg',
                      alt: 'share',
                      height: '20',
                      width: '20',
                      className: 'share-button'
                    }),
                    'SHARE'
                  )
                )
              )
            )
          )
        );
      };
    },
    '5fIB': function (e, t, n) {
      var r = n('7eYB');
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    '8Kt/': function (e, t, n) {
      'use strict';
      n('oI91');
      (t.__esModule = !0), (t.defaultHead = u), (t.default = void 0);
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n('q1tI')),
        a = (r = n('Xuae')) && r.__esModule ? r : { default: r },
        i = n('lwAK'),
        l = n('FYa8'),
        c = n('/0+H');
      function s() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement('meta', { charSet: 'utf-8' })];
        return (
          e ||
            t.push(
              o.default.createElement('meta', { name: 'viewport', content: 'width=device-width' })
            ),
          t
        );
      }
      function p(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (e, t) {
                return 'string' === typeof t || 'number' === typeof t ? e : e.concat(t);
              }, [])
            )
          : e.concat(t);
      }
      var d = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function f(e, t) {
        return e
          .reduce(function (e, t) {
            var n = o.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(p, [])
          .reverse()
          .concat(u(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var a = !0,
                  i = !1;
                if (o.key && 'number' !== typeof o.key && o.key.indexOf('$') > 0) {
                  i = !0;
                  var l = o.key.slice(o.key.indexOf('$') + 1);
                  e.has(l) ? (a = !1) : e.add(l);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case 'meta':
                    for (var c = 0, s = d.length; c < s; c++) {
                      var u = d[c];
                      if (o.props.hasOwnProperty(u))
                        if ('charSet' === u) n.has(u) ? (a = !1) : n.add(u);
                        else {
                          var p = o.props[u],
                            f = r[u] || new Set();
                          ('name' === u && i) || !f.has(p) ? (f.add(p), (r[u] = f)) : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return o.default.cloneElement(e, { key: n });
          });
      }
      function m(e) {
        var t = e.children,
          n = (0, o.useContext)(i.AmpStateContext),
          r = (0, o.useContext)(l.HeadManagerContext);
        return o.default.createElement(
          a.default,
          { reduceComponentsToState: f, headManager: r, inAmpMode: (0, c.isInAmpMode)(n) },
          t
        );
      }
      m.rewind = function () {};
      var b = m;
      t.default = b;
    },
    CVNw: function (e, t, n) {
      e.exports = (function (e) {
        var t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var o = (t[r] = { i: r, l: !1, exports: {} });
          return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
          }),
          (n.r = function (e) {
            'undefined' != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(e, '__esModule', { value: !0 });
          }),
          (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
              (n.r(r),
              Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
              2 & t && 'string' != typeof e)
            )
              for (var o in e)
                n.d(
                  r,
                  o,
                  function (t) {
                    return e[t];
                  }.bind(null, o)
                );
            return r;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, 'a', t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ''),
          n((n.s = 2))
        );
      })([
        function (e, t) {
          e.exports = n('17x9');
        },
        function (e, t) {
          e.exports = n('q1tI');
        },
        function (e, t, n) {
          'use strict';
          n.r(t);
          var r = n(1),
            o = n(0),
            a = function () {
              return (a =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }).apply(this, arguments);
            },
            i = 0,
            l = r.forwardRef(function (e, t) {
              var n = e.title,
                o = void 0 === n ? null : n,
                l = e.description,
                c = void 0 === l ? null : l,
                s = e.size,
                u = void 0 === s ? null : s,
                p = e.color,
                d = void 0 === p ? 'currentColor' : p,
                f = e.horizontal,
                m = void 0 === f ? null : f,
                b = e.vertical,
                h = void 0 === b ? null : b,
                g = e.rotate,
                y = void 0 === g ? null : g,
                v = e.spin,
                k = void 0 === v ? null : v,
                O = e.style,
                w = void 0 === O ? {} : O,
                x = e.children,
                j = (function (e, t) {
                  var n = {};
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                      t.indexOf(r[o]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                        (n[r[o]] = e[r[o]]);
                  }
                  return n;
                })(e, [
                  'title',
                  'description',
                  'size',
                  'color',
                  'horizontal',
                  'vertical',
                  'rotate',
                  'spin',
                  'style',
                  'children'
                ]);
              i++;
              var _,
                z = null !== k && k,
                S = r.Children.map(x, function (e) {
                  var t = e;
                  !0 !== z && (z = !0 === (null === k ? t.props.spin : k));
                  var n = t.props.size;
                  'number' == typeof u && 'number' == typeof t.props.size && (n = t.props.size / u);
                  var o = {
                    size: n,
                    color: null === d ? t.props.color : d,
                    horizontal: null === m ? t.props.horizontal : m,
                    vertical: null === h ? t.props.vertical : h,
                    rotate: null === y ? t.props.rotate : y,
                    spin: null === k ? t.props.spin : k,
                    inStack: !0
                  };
                  return r.cloneElement(t, o);
                });
              null !== u && (w.width = 'string' == typeof u ? u : 1.5 * u + 'rem');
              var M,
                C = 'stack_labelledby_' + i,
                E = 'stack_describedby_' + i;
              if (o) _ = c ? C + ' ' + E : C;
              else if (((M = 'presentation'), c))
                throw new Error('title attribute required when description is set');
              return r.createElement(
                'svg',
                a({ ref: t, viewBox: '0 0 24 24', style: w, role: M, 'aria-labelledby': _ }, j),
                o && r.createElement('title', { id: C }, o),
                c && r.createElement('desc', { id: E }, c),
                z &&
                  r.createElement(
                    'style',
                    null,
                    '@keyframes spin { to { transform: rotate(360deg) } }',
                    '@keyframes spin-inverse { to { transform: rotate(-360deg) } }'
                  ),
                S
              );
            });
          (l.displayName = 'Stack'),
            (l.propTypes = {
              size: o.oneOfType([o.number, o.string]),
              color: o.string,
              horizontal: o.bool,
              vertical: o.bool,
              rotate: o.number,
              spin: o.oneOfType([o.bool, o.number]),
              children: o.oneOfType([o.arrayOf(o.node), o.node]).isRequired,
              className: o.string,
              style: o.object
            }),
            (l.defaultProps = {
              size: null,
              color: null,
              horizontal: null,
              vertical: null,
              rotate: null,
              spin: null
            });
          var c = l;
          n.d(t, 'Icon', function () {
            return p;
          }),
            n.d(t, 'Stack', function () {
              return c;
            });
          var s = function () {
              return (s =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }).apply(this, arguments);
            },
            u = 0,
            p = r.forwardRef(function (e, t) {
              var n = e.path,
                o = e.id,
                a = void 0 === o ? ++u : o,
                i = e.title,
                l = void 0 === i ? null : i,
                c = e.description,
                p = void 0 === c ? null : c,
                d = e.size,
                f = void 0 === d ? null : d,
                m = e.color,
                b = void 0 === m ? 'currentColor' : m,
                h = e.horizontal,
                g = void 0 !== h && h,
                y = e.vertical,
                v = void 0 !== y && y,
                k = e.rotate,
                O = void 0 === k ? 0 : k,
                w = e.spin,
                x = void 0 !== w && w,
                j = e.style,
                _ = void 0 === j ? {} : j,
                z = e.inStack,
                S = void 0 !== z && z,
                M = (function (e, t) {
                  var n = {};
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                      t.indexOf(r[o]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                        (n[r[o]] = e[r[o]]);
                  }
                  return n;
                })(e, [
                  'path',
                  'id',
                  'title',
                  'description',
                  'size',
                  'color',
                  'horizontal',
                  'vertical',
                  'rotate',
                  'spin',
                  'style',
                  'inStack'
                ]),
                C = {},
                E = [];
              null !== f &&
                (S
                  ? E.push('scale(' + f + ')')
                  : ((_.width = 'string' == typeof f ? f : 1.5 * f + 'rem'), (_.height = _.width))),
                g && E.push('scaleX(-1)'),
                v && E.push('scaleY(-1)'),
                0 !== O && E.push('rotate(' + O + 'deg)'),
                null !== b && (C.fill = b);
              var P = r.createElement('path', s({ d: n, style: C }, S ? M : {})),
                I = P;
              E.length > 0 &&
                ((_.transform = E.join(' ')),
                (_.transformOrigin = 'center'),
                S &&
                  (I = r.createElement(
                    'g',
                    { style: _ },
                    P,
                    r.createElement('rect', { width: '24', height: '24', fill: 'transparent' })
                  )));
              var A,
                N = I,
                T = !0 === x || 'number' != typeof x ? 2 : x,
                q = !S && (g || v);
              if (
                (T < 0 && (q = !q),
                x &&
                  (N = r.createElement(
                    'g',
                    {
                      style: {
                        animation:
                          'spin' + (q ? '-inverse' : '') + ' linear ' + Math.abs(T) + 's infinite',
                        transformOrigin: 'center'
                      }
                    },
                    I,
                    !(g || v || 0 !== O) &&
                      r.createElement('rect', { width: '24', height: '24', fill: 'transparent' })
                  )),
                S)
              )
                return N;
              var H,
                R = 'icon_labelledby_' + a,
                K = 'icon_describedby_' + a;
              if (l) A = p ? R + ' ' + K : R;
              else if (((H = 'presentation'), p))
                throw new Error('title attribute required when description is set');
              return r.createElement(
                'svg',
                s({ ref: t, viewBox: '0 0 24 24', style: _, role: H, 'aria-labelledby': A }, M),
                l && r.createElement('title', { id: R }, l),
                p && r.createElement('desc', { id: K }, p),
                !S &&
                  x &&
                  (q
                    ? r.createElement(
                        'style',
                        null,
                        '@keyframes spin-inverse { to { transform: rotate(-360deg) } }'
                      )
                    : r.createElement(
                        'style',
                        null,
                        '@keyframes spin { to { transform: rotate(360deg) } }'
                      )),
                N
              );
            });
          (p.displayName = 'Icon'),
            (p.propTypes = {
              path: o.string.isRequired,
              size: o.oneOfType([o.number, o.string]),
              color: o.string,
              horizontal: o.bool,
              vertical: o.bool,
              rotate: o.number,
              spin: o.oneOfType([o.bool, o.number]),
              style: o.object,
              inStack: o.bool,
              className: o.string
            }),
            (p.defaultProps = {
              size: null,
              color: 'currentColor',
              horizontal: !1,
              vertical: !1,
              rotate: 0,
              spin: !1
            }),
            (t.default = p);
        }
      ]);
    },
    Xuae: function (e, t, n) {
      'use strict';
      var r = n('mPvQ'),
        o = n('/GRZ'),
        a = n('i2R6'),
        i = (n('qXWd'), n('48fX')),
        l = n('tCBg'),
        c = n('T0f4');
      function s(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = c(e);
          if (t) {
            var o = c(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var u = n('q1tI'),
        p = (function (e) {
          i(n, e);
          var t = s(n);
          function n(e) {
            var a;
            return (
              o(this, n),
              ((a = t.call(this, e))._hasHeadManager = void 0),
              (a.emitChange = function () {
                a._hasHeadManager &&
                  a.props.headManager.updateHead(
                    a.props.reduceComponentsToState(
                      r(a.props.headManager.mountedInstances),
                      a.props
                    )
                  );
              }),
              (a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances),
              a
            );
          }
          return (
            a(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._hasHeadManager && this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                }
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.emitChange();
                }
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._hasHeadManager && this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                }
              },
              {
                key: 'render',
                value: function () {
                  return null;
                }
              }
            ]),
            n
          );
        })(u.Component);
      t.default = p;
    },
    ZW3T: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/posts/[slug]',
        function () {
          return n('0FOq');
        }
      ]);
    },
    g4pe: function (e, t, n) {
      e.exports = n('8Kt/');
    },
    kG2m: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    lwAK: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = ((r = n('q1tI')) && r.__esModule ? r : { default: r }).default.createContext({});
      t.AmpStateContext = o;
    },
    mPvQ: function (e, t, n) {
      var r = n('5fIB'),
        o = n('rlHP'),
        a = n('KckH'),
        i = n('kG2m');
      e.exports = function (e) {
        return r(e) || o(e) || a(e) || i();
      };
    },
    oI91: function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      };
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      };
    }
  },
  [['ZW3T', 0, 2, 5, 1, 3, 4]]
]);
