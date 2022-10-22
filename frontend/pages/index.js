import { GithubBtn, EmptyState, EditorLayout } from '@components';
import Head from 'next/head';

function Home() {
  const logo = (
    <pre className="text-white text-xs">{`
                 .:~!77777777!~:.                 
               :~7???777777777777!^.              
              ~77!!!!!77777777777777^.          .:
             ~~:.     .:!77777777777?7~:.    .:~!:
            ..           .~7?7777777777777!!77?!. 
                           .^!77?77777777???7!:   
         .......              .:^~!!!!!!!~^:.     
    .:~!!7777777!!~:.                             
  .~7????777777777777!:                           
 ^77!~~~~!7777777777777!^.          :.            
:~:.      .^!7777777777777~:.....:^!^             
.            :!7?7777777777777777?7^              
               .^!77777777777777!^.               
                  .:^~~!!!!~~^:.                  


  `}</pre>
  );

  return (
    <>
      <Head>
        <title>Free predesigned Tailwind UI Components</title>
      </Head>
      <EmptyState title="Welcome, Dev! 👋" prepend={logo}>
        Collection of free pre-designed Tailwind UI components. You can use it
        for
        <span className="border-b border-current">personal</span> or{' '}
        <span className="border-b border-current">commercial</span> purposes
        without any attribution.
        <br />
        <br />
        <GithubBtn />
      </EmptyState>
    </>
  );
}

Home.getLayout = EditorLayout;

export default Home;
