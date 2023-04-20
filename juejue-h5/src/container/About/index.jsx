import Header from '@/components/Header'

import s from './style.module.less'

const About = () => {
  return <>
    <Header title='关于我们' />
    <div className={s.about}>
      <h2>关于项目</h2>
      <article>
        初步了解前后端实现业务逻辑，以及如何解决全栈开发遇到的各种问题
      </article>
      <h2>关于作者</h2>
      <article>
        没什么好说的…… ：-（
      </article>
    </div>
  </>
};

export default About;