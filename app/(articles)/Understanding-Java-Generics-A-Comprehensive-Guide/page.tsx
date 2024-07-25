"use client"
import React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

import './page.css'

import profile from './images/profile.jpeg'
import heart from './images/heart-svgrepo-com.svg'
import comment from './images/comment-svgrepo-com.svg'
import link from './images/link-minimalistic-svgrepo-com.svg'
import play from './images/play-circle-svgrepo-com.svg'
import bookmark from './images/bookmark-svgrepo-com.svg'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Understanding Java Generics: A Comprehensive Guide',
  description: 'Java Generics, introduced in JDK 5, revolutionized the way we handle collections and types in Java programming. They provide a way to parameterize types, allowing for more flexible, reusable, and type-safe code. This comprehensive guide will delve into the intricacies of Java Generics, exploring their syntax, benefits, limitations, and best practices.',
}

interface CodeBlockProps {language: string;code: string;}
const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);


return (
    <pre>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

function artone() {
  const javaCode = `
public class GenericBox<T> {
  private T value;

  public void set(T value) { 
    this.value = value; 
  }

  public T get() { 
    return value; 
  }
}
  `;
  return (
  <>
    <div className="listoficonsreact">
        <div className="artinfo-user-art">
            <Image src={profile} alt='' />
            <div className="aua-date-time">
                <p>Hatim Habchaoui</p>
                <h3>9 min, Sept 5,2023</h3>
            </div>
        </div>    
        <div className="like-com-au-sv">
          <div className="react-comment">
            <div className="imgnum"><Image src={heart} alt=""/><p>20</p></div>
            <Image id="comments" src={comment} alt=""/>
          </div>
          <div className="copy-aud-save">
            <Image src={link} alt=""/>
            <Image src={play} alt=""/>
            <Image src={bookmark} alt=""/>
          </div>
        </div>  
    </div>


<div className="artic">
<h1>Understanding Java Generics: A Comprehensive Guide</h1>

<p>Java Generics, introduced in JDK 5, revolutionized the way we handle collections and types in Java programming. They provide a way to parameterize types, allowing for more flexible, reusable, and type-safe code. This comprehensive guide will delve into the intricacies of Java Generics, exploring their syntax, benefits, limitations, and best practices.</p>

<h2>Introduction to Generics</h2>

<p>Generics enable types (classes and interfaces) to be parameters when defining classes, interfaces, and methods. By using generics, you can create code that works with any object type while maintaining compile-time type safety.</p>

<pre><code className="language-java">List&lt;String&gt; list = new ArrayList&lt;&gt;();
list.add("Hello");
String s = list.get(0);
</code></pre>

<p>In this example, <code>List&lt;String&gt;</code> is a generic type, ensuring that only <code>String</code> objects can be added to the list. Without generics, you would use raw types, which are more error-prone due to the lack of type checking:</p>

<pre><code className="language-java">List list = new ArrayList();
list.add("Hello");
String s = (String) list.get(0);
</code></pre>

<h2>The Syntax of Generics</h2>

<p>Generics syntax involves specifying type parameters within angle brackets (<code>&lt;&gt;</code>). These parameters can be used in class, method, and interface definitions.</p>

<h3>Generic Class:</h3>

<pre><CodeBlock language="java" code='public class Box&lt;T&gt; {
private T t;
public void set(T t) { this.t = t; }
public T get() { return t; }
}
'/></pre>

<p>Here, <code>T</code> is a type parameter that can be substituted with any object type. For instance:</p>

<pre><code className="language-java">Box&lt;Integer&gt; integerBox = new Box&lt;&gt;();
Box&lt;String&gt; stringBox = new Box&lt;&gt;();
</code></pre>

<h3>Generic Method:</h3>

<p>Generic methods allow type parameters to be used within a method:</p>

<pre><CodeBlock language="java" code='public &lt;T&gt; void printArray(T[] inputArray) {
for (T element : inputArray) {
    System.out.printf("%s ", element);
}
}'
/></pre>

<p>You can call this method with any type of array:</p>

<pre><CodeBlock language="java" code='printArray(new Integer[]{1, 2, 3});
printArray(new String[]{"Hello", "World"});'
/></pre>

<h3>Generic Interface:</h3>

<p>Interfaces can also be parameterized with types:</p>

<pre><CodeBlock language="java" code='public interface Comparable&lt;T&gt; {
int compareTo(T o);
}'
/></pre>

<p>Classes implementing this interface must specify the type:</p>

<pre><CodeBlock language="java" code='public class MyClass implements Comparable&lt;MyClass&gt; {
public int compareTo(MyClass o) {
    // implementation
}
}'
/></pre>

<h2>Benefits of Generics</h2>

<h3>Type Safety:</h3>

<p>Generics ensure that you can only use objects of the specified type, reducing runtime errors:</p>

<pre><CodeBlock language="java" code='List&lt;String&gt; list = new ArrayList&lt;&gt;();
list.add("Hello");
// list.add(123); // Compilation error'/></pre>

<h3>Elimination of Casts:</h3>

<p>Without generics, you need explicit casting, which can lead to <code>ClassCastException</code>:</p>

<pre><code className="language-java">List list = new ArrayList();
list.add("Hello");
String s = (String) list.get(0); // Explicit cast
</code></pre>

<p>With generics, casting is implicit and type-checked at compile-time:</p>

<pre><code className="language-java">&lt;html&gt; list = new ArrayList&lt;&gt;();
list.add("Hello");
String s = list.get(0); // No cast needed
</code></pre>

<h3>Enabling Reuse:</h3>

<p>Generics promote code reuse by allowing the same class or method to operate on different types:</p>

<pre><CodeBlock language="java" code={javaCode} /></pre>

<h3>Improved Code Readability:</h3>

<p>Generics provide more information about the types being used, making the code easier to read and understand.</p>

<h2>Common Use Cases</h2>

<h3>Collections Framework:</h3>

<p>Generics are extensively used in the Java Collections Framework:</p>

<pre><code className="language-java">List&lt;String&gt; list = new ArrayList&lt;&gt;();
Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();
</code></pre>

<h3>Generic Algorithms:</h3>

<p>Generics enable the creation of algorithms that can operate on different types:</p>

<pre><CodeBlock language="java" code='public static &lt;T extends Comparable&lt;T&gt;&gt; T findMax(T[] array) {
T max = array[0];
for (T element : array) {
    if (element.compareTo(max) &gt; 0) {
        max = element;
    }
}
return max;
}
'/></pre>

<h3>Type Parameter Bounds:</h3>

<p>You can specify bounds for type parameters using <code>extends</code> for upper bounds and <code>super</code> for lower bounds:</p>

<pre><CodeBlock language="java" code='public &lt;T extends Number&gt; void printNumbers(T[] numbers) {
for (T number : numbers) {
    System.out.println(number);
}
}' /></pre>

<h2>Advanced Concepts</h2>

<h3>Wildcards:</h3>

<p>Wildcards (<code>?</code>) represent an unknown type and are used in scenarios where the exact type is not needed:</p>

<pre><CodeBlock language="java" code='public void processList(List&lt;?&gt; list) {
for (Object obj : list) {
    System.out.println(obj);
}
}'
 /></pre>

<p>Wildcards can be bounded:</p>

<ul>
    <li><strong>Upper Bounded Wildcards:</strong> <code>&lt;? extends T&gt;</code></li>
    <li><strong>Lower Bounded Wildcards:</strong> <code>&lt;? super T&gt;</code></li>
</ul>

<h3>Type Erasure:</h3>

<p>Java generics use type erasure to ensure backward compatibility with legacy code. This means that generic type information is erased at runtime:</p>

<pre><CodeBlock language="java" code='public class Box&lt;T&gt; {
private T t;
}'
/></pre>

<p>At runtime, the type parameter <code>T</code> is replaced with <code>Object</code> (or the upper bound if specified).</p>

<h3>Generic Constructors:</h3>

<p>Constructors can also be generic:</p>

<pre><CodeBlock language="java" code='public class MyClass {
private &lt;T&gt; MyClass(T t) {
    System.out.println(t);
}
}' /></pre>

<h2>Limitations of Generics</h2>

<p>Despite their advantages, generics have some</p>
</div>
</>
  )
}

export default artone
