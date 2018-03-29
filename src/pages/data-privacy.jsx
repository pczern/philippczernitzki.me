import React from 'react'
import Helmet from 'react-helmet'
import { BlogContainer } from '../components/Container'
import { LinkExternal } from '../components/Link'

import Post from '../components/Post'

function DataPrivacy() {
  // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  return (
    <BlogContainer>
      <Helmet>
        <title>Data Privacy</title>
      </Helmet>
      <Post>
        <h1>Data Privacy Policy / Impressum</h1>
        <p>
          Our website may be used without entering personal information.
          Different rules may apply to certain services on our site, however,
          and are explained separately below. We collect personal information
          from you (e.g. name, address, email address, telephone number, etc.)
          in accordance with the provisions of German data protection statutes.
          Information is considered personal if it can be associated exclusively
          to a specific natural person. The legal framework for data protection
          may be found in the German Federal Data Protection Act (BDSG) and the
          Telemedia Act (TMG). The provisions below serve to provide information
          as to the manner, extent and purpose for collecting, using and
          processing personal information by the provider.
        </p>
        <p style={{ fontWeight: '500' }}>
          <span style={{ display: 'block', marginBottom: '0.5em' }}>
            Philipp Czernitzki<br />
            Langgasse 172<br />
            67454 Hassloch<br />
            Germany<br />
          </span>
          Phone: 06324 9116267<br />
          E-Mail: philipp.czernitzki@gmail.com
        </p>
        <p>
          Please be aware that data transfer via the internet is subject to
          security risks and, therefore, complete protection against third-party
          access to transferred data cannot be ensured.
        </p>
        <h4>Cookies</h4>
        <p>
          Our website makes use of so-called cookies in order to recognize
          repeat use of our website by the same user/internet connection
          subscriber. Cookies are small text files that your internet browser
          downloads and stores on your computer. They are used to improve our
          website and services. In most cases these are so-called &quot;session
          cookies&quot; that are deleted once you leave our website.
        </p>
        <p>
          {' '}
          To an extent, however, these cookies also pass along information used
          to automatically recognize you. Recognition occurs through an IP
          address saved to the cookies. The information thereby obtained is used
          to improve our services and to expedite your access to the website.
        </p>
        <p>
          {' '}
          You can prevent cookies from being installed by adjusting the settings
          on your browser software accordingly. You should be aware, however,
          that by doing so you may not be able to make full use of all the
          functions of our website.
        </p>
        <h4>Server Data</h4>
        <p>
          For technical reasons, data such as the following, which your internet
          browser transmits to us or to our web space provider (so called server
          log files), is collected: - type and version of the browser you use -
          operating system - websites that linked you to our site (referrer URL)
          - websites that you visit - date and time of your visit - your
          Internet Protocol (IP) address. This anonymous data is stored
          separately from any personal information you may have provided,
          thereby making it impossible to connect it to any particular person.
          The data is used for statistical purposes in order to improve our
          website and services.
        </p>
        {/* TODO add registration
           <h4>Purpose of Registering</h4>
        <p>
          We offer you the opportunity to sign up for our website. The
          information entered when signing up, as shown in the registration form
        </p>
        <p>
          {' '}
          <strong>[PLEASE ENTER: NAME, EMAILADRESS ETC.]</strong>
        </p>
        <p>
          {' '}
          is collected and stored solely for use by our website. When signing up
          for our website, we also store your IP address and the date and time
          you registered. This serves to protect us in the event a third party
          improperly and without your knowledge makes use of your data to sign
          up for our site.&nbsp;None of this information is transferred to third
          parties. Nor is any of this information matched to any information
          that may be collected by other components of our website.
        </p> */}
        <h4>Newsletter</h4>
        <p>
          Our website offers you the opportunity to subscribe to our newsletter.
          The newsletter provides you periodically with information about our
          services. To receive our newsletter, we require a valid email address.
          We will review the email address you provide for the purpose of
          determining whether you are in fact the owner of the email address
          provided or whether the actual owner of said address is authorized to
          receive the newsletter. When subscribing to our newsletter, we will
          store your IP address as well as the date and time you subscribed.
          This serves to protect us in the event a third party improperly and
          without your knowledge makes use of your email address to subscribe to
          our newsletter. We will not collect any other data. The data thereby
          collected is used solely for the purpose of receiving our newsletter.
          No data is transferred to third parties. Nor is any of this
          information matched to any information that other components of our
          website may collect. You may cancel your subscription to the
          newsletter at any time. You will find additional details in the email
          confirming your subscription as well as in each newsletter.
        </p>
        <h4>Contacting Us</h4>
        <p>
          On our website we offer you the opportunity to contact us, either by
          email and/or by using a contact form. In such event, information
          provided by the user is stored for the purpose of facilitating
          communications with the user. No data is transferred to third parties.
          Nor is any of this information matched to any information that may be
          collected by other components of our website.
        </p>
        <h4>Posting Comments</h4>
        <p>
          On our website we offer you the opportunity to post comments about
          individual articles. For this purpose, the IP address of the
          user/internet connection subscriber is stored. This information is
          stored for our security in the event the author through his/her
          comments infringes against third party rights and/or unlawful content
          is entered. Consequently, we have a direct interest in the author’s
          stored data, particularly since we may be potentially liable for such
          violations. No data is transferred to third parties. Nor is any of
          this information matched to any information that may be collected by
          other components of our website.
        </p>
        <h4>Subscribing to Comments</h4>
        <p>
          On our website we offer you the opportunity to subscribe to subsequent
          comments about an article which you intend to comment on. When you
          choose this option, you will receive a confirmation email which is
          used to determine if you are actually the owner of the email address
          entered. You may at any time revoke your decision to subscribe to such
          follow-on comments. You will find additional details in the
          confirmation email. No data hereby obtained is transferred to third
          parties. Nor is any of this information matched to any information
          that may be collected by other components of our website.
        </p>
        <h4>Use of Google Analytics with anonymization</h4>
        <p>
          Our website uses Google Analytics, a web analysis service from Google
          Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA,
          hereinafter referred to as “Google“. Google Analytics employs
          so-called “cookies“, text files that are stored to your computer in
          order to facilitate an analysis of your use of the site.
        </p>
        <p>
          The information generated by these cookies, such as time, place and
          frequency of your visits to our site, including your IP address, is
          transmitted to Google’s location in the US and stored there.
        </p>
        <p>
          We use Google Analytics with an IP anonymization feature on our
          website. In doing so, Google abbreviates and thereby anonymizes your
          IP address before transferring it from member states of the European
          Union or signatory states to the Agreement on the European Economic
          Area.
        </p>
        <p>
          Google will use this information to evaluate your usage of our site,
          to compile reports on website activity for us, and to provide other
          services related to website-&nbsp;and internet usage. Google may also
          transfer this information to third parties if this is required by law
          or to the extent this data is processed by third parties&nbsp;on
          Google´s behalf.
        </p>
        <p>
          Google states that it will in never associate your IP address with
          other data held by Google. You can prevent cookies from being
          installed by adjusting the settings on your browser software
          accordingly. You should be aware, however, that by doing so you may
          not be able to make full use of all the functions of our website.
        </p>
        <p>
          Google also offers a disabling option for the most common browsers,
          thus providing you with greater control over the data which is
          collected and processed by Google. If you enable this option, no
          information regarding your website visit is transmitted to Google
          Analytics. However, the activation does not prevent the transmission
          of information to us or to any other web analytics services we may
          use. For more information about the disabling option provided by
          Google, and how to enable this option, visit{' '}
          <LinkExternal
            to="https://tools.google.com/dlpage/gaoptout?hl=de"
            rel="nofollow"
          >
            https://tools.google.com/dlpage/gaoptout?hl=en
          </LinkExternal>
          <br />
          <br />
          You can also enable the option for this session using the following
          link:<br />
          <a href="javascript:gaOptout();">Deactive Google Analytics</a>
        </p>
        <h4>Use of Google+ recommendation components</h4>
        <p>
          Our website employs the &quot;+1&quot;-buttom from Google+ belonging
          to Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043
          USA, hereinafter referred to as &quot;Google&quot;. Each time our
          website receives an access request equipped with a &quot;+1&quot;
          component, the component prompts your browser to download an image of
          this component from Google. Through this process, Google is informed
          precisely which page of our website is being visited. As specified by
          Google, your visit undergoes additional analysis in the event you are
          not logged into your Google account.<strong />
          If you access our site while logged into Google and press the
          &quot;+1&quot; button, Google can collect information about your
          Google account, websites you recommend as well as your IP address,
          along with other browser-related information. This allows your
          &quot;+1&quot; recommendation to be stored and publicized. Your Google
          &quot;+1&quot; recommendation can then appear as a reference in other
          Google services, such as search results, your Google account or other
          places, such as on websites and ads in the internet, , together with
          your account name and, if applicable, a picture you provided to
          Google. Furthermore, Google can link your visit to our site with data
          stored by Google. Google also records this information for the purpose
          of further improving Google services. If you wish to minimize the
          collection of information by Google as previously described, you must
          log out of your Google account before visiting our website.
        </p>
        You can access Google‘s data protection policies relating to the
        &quot;+1&quot; button together with all relevant information on the
        collection, transfer and use of data by Google, your rights in this
        regard as well as your profile settings options at the following link:
        <p>
          <LinkExternal
            to="https://developers.google.com/+/web/buttons-policy"
            rel="nofollow"
          >
            https://developers.google.com/+/web/buttons-policy
          </LinkExternal>
        </p>
        <h4>The use of Google Maps with recommendation components</h4>
        <p>
          We use the &quot;Google Maps&quot; component on our website in
          combination with the so-called &quot;Share function&quot;.
          &quot;Google Maps&quot; is a service of Google Inc., 1600 Amphitheatre
          Parkway, Mountain View, CA 94043 USA, hereinafter &quot;Google.&quot;
        </p>
        <p>
          Each time this component is called up, Google sets a cookie in order
          to process the user configuration and data when the page with the
          integrated &quot;Google Maps&quot; component is displayed. As a
          general rule, this cookie is not deleted by closing the browser, but
          rather expires after a certain time, as long as it is not previously
          manually deleted by you.
        </p>
        <p>
          If you do not agree with this processing of your data, you may choose
          to deactivate the &quot;Google Maps&quot; service and thereby prevent
          the transfer of data to Google. To do this, you must deactivate the
          Java Script function in your browser. However, we would like to point
          out that in this case you will not be able to use &quot;Google
          Maps&quot; or at least only to a limited extent.
        </p>
        <p>
          The use of &quot;Google Maps&quot; and the information obtained
          through &quot;Google Maps&quot; is according to Google’s Terms of
          Use&nbsp;<br />
          <LinkExternal
            to="http://www.google.de/intl/de/policies/terms/regional.html"
            rel="nofollow"
          >
            http://www.google.de/intl/de/policies/terms/regional.html
          </LinkExternal>
        </p>
        <p>
          as well as the additional Terms and Conditions for &quot;Google
          Maps&quot;<br />
          <LinkExternal
            to="https://www.google.com/intl/de_de/help/terms_maps.html"
            rel="nofollow"
          >
            https://www.google.com/intl/de_de/help/terms_maps.html
          </LinkExternal>.&nbsp;
        </p>
        <p>
          The Google Maps function also includes the following recommendation
          buttons:
        </p>
        <ul>
          <li>
            “Google+-Button” from the company Google Inc., 1600 Amphitheatre
            Parkway, Mountain View, CA 94043 USA;
          </li>
          <li>
            “Facebook-Button” from the company Facebook Inc., 1601 S. California
            Ave, Palo Alto, CA 94304, USA;
          </li>
          <li>
            “Twitter-Button” from the company Twitter Inc., 795 Folsom St.,
            Suite 600, San Francisco, CA 94107, USA.
          </li>
        </ul>
        <p>
          By calling up the “Google Maps” page, these “Recommendation
          components” cause the browser you are using to download a
          corresponding display of the component from the respective provider.
          In this way, the respective provider mentioned above will be informed
          about which specific page of our internet site you are currently
          visiting.
        </p>
        <p>
          If you are logged in to your personal account at the provider
          previously mentioned at the time of calling up the “Google Maps” page,
          this will be able to collect the information obtained about the
          websites recommended by you as well as your IP address and other
          browser relevant information and link it to your respective account.
        </p>
        <p>
          If you want to prevent this transmission and storage of data by the
          respective provider about you and your behaviour on our website, you
          must log out of those providers before you visit our site.
        </p>
        <p>
          You can find out more about the data collection of the respective
          providers via the following links:
        </p>
        <p>
          Privacy Policy Twitter:{' '}
          <LinkExternal to="https://twitter.com/privacy?lang=de" rel="nofollow">
            https://twitter.com/privacy?lang=de
          </LinkExternal>
          <LinkExternal to="https://twitter.com/privacy?lang=de" rel="nofollow">
            <br />
          </LinkExternal>Privacy Policy Facebook:{' '}
          <LinkExternal to="https://de-en.facebook.com/about/privacy">
            https://de-en.facebook.com/about/privacy
          </LinkExternal>
          <LinkExternal to="https://de-en.facebook.com/about/privacy">
            <br />
          </LinkExternal>Privacy Policy Google+:{' '}
          <LinkExternal
            to="https://developers.google.com/+/web/buttons-policy"
            rel="nofollow"
          >
            https://developers.google.com/+/web/buttons-policy
          </LinkExternal>
        </p>
        <h4>Use of Google Maps</h4>
        <p>
          We use the “Google Maps” component of Google Inc., 1600 Amphitheatre
          Parkway, Mountain View, CA 94043 USA, hereinafter “Google.”
        </p>
        <p>
          Google sets a cookie in order to process the user configuration and
          data when the page with the integrated “Google Maps” component is
          displayed. As a general rule, this cookie is not deleted by closing
          the browser, but rather expires after a certain time, as long as it is
          not previously manually deleted by you.
        </p>
        <p>
          If you do not agree with this processing of your data, you may choose
          to deactivate the “Google Maps” service and thereby prevent the
          transfer of data to Google. To do this, you must deactivate the Java
          Script function in your browser. However, we would like to point out
          that in this case you will not be able to use “Google Maps” or at
          least only to a limited extent.
        </p>
        <p>
          The use of “Google Maps” and the information obtained through “Google
          Maps” is according to Google’s Terms of Use
        </p>
        <p>
          <LinkExternal
            to="http://www.google.de/intl/de/policies/terms/regional.html"
            rel="nofollow"
          >
            http://www.google.de/intl/de/policies/terms/regional.html
          </LinkExternal>
        </p>
        <p>
          as well as the additional Terms and Conditions for &quot;Google
          Maps&quot;
        </p>
        <p>
          <LinkExternal
            to="https://www.google.com/intl/de_de/help/terms_maps.html"
            rel="nofollow"
          >
            https://www.google.com/intl/de_de/help/terms_maps.html
          </LinkExternal>.
        </p>
        <h4>Use of reCAPTCHA</h4>
        <p>
          In order to protect input forms on our site, we use the
          &quot;reCAPTCHA&quot; service of Google Inc., 1600 Amphitheatre
          Parkway, Mountain View, CA 94043 USA, hereinafter &quot;Google&quot;.
          By means of this service it can be distinguished whether the
          corresponding input is of human origin or is created improperly by
          automated machine processing.
        </p>
        <p>
          To our knowledge, the referrer URL, the IP address, the behaviour of
          the website visitors, information about the operating system, browser
          and length of stay, cookies, display instructions and scripts, user
          input behaviour and mouse movements in the &quot;reCAPTCHA&quot;
          checkbox are conveyed to &quot;Google.&quot;
        </p>
        <p>
          Google uses the information obtained, among other things, to digitize
          books and other printed matter as well as to optimize services such as
          Google Street View and Google Maps (e.g. house number and street name
          recognition).
        </p>
        <p>
          The IP address provided as part of &quot;reCAPTCHA&quot; is not merged
          with other data from Google unless you are logged into your Google
          Account at the time the &quot;reCAPTCHA&quot; plug-in is used. If you
          want to prevent this transmission and storage of data by
          &quot;Google&quot; about you and your behaviour on our website, you
          must log out of &quot;Google&quot; before you visit our site or before
          using the reCAPTCHA plug-in.
        </p>
        <p>
          The use of the “reCAPTCHA” service is according to the Google Terms of
          Use:&nbsp;
        </p>
        <p>
          <LinkExternal
            to="https://www.google.com/intl/de/policies/privacy/"
            rel="nofollow"
          >
            https://www.google.com/intl/de/policies/privacy/
          </LinkExternal>.
        </p>
        <h4>Use of Facebook components</h4>
        <p>
          Our website employs components provided by facebook.com. Facebook is a
          service of Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304,
          USA.
        </p>
        <p>
          Each time our website receives an access request equipped with a
          Facebook component, the component prompts your browser to download an
          image of this Facebook component. Through this process, Facebook is
          informed precisely which page of our website is being visited.&nbsp;
        </p>
        <p>
          When you access our site while logged into Facebook, Facebook uses
          information gathered by this component to identify the precise page
          you are viewing and associates this information to your personal
          account on Facebook. Whenever you click on the&nbsp;“Like“ button, for
          example, or enter a comment, this information is transmitted to your
          personal account on Facebook and stored there. In addition, Facebook
          is informed of your visit to our website. This occurs regardless of
          whether you click on a component or not.
        </p>
        <p>
          If you wish to prevent the transfer to and storage of data by Facebook
          about you and your interaction with our website, you must first log
          out of Facebook before visiting our website. The data protection
          policies of Facebook provide additional information, in particular
          about the collection and use of data by Facebook, your rights in this
          regard as well as the options available to you for protecting your
          privacy:{' '}
          <LinkExternal
            to="https://de-de.facebook.com/about/privacy/"
            rel="nofollow"
          >
            https://de-de.facebook.com/about/privacy/
          </LinkExternal>
        </p>
        <p>
          You can find an overview of Facebook plugins at{' '}
          <LinkExternal
            to="https://developers.facebook.com/docs/plugins/"
            rel="nofollow"
          >
            https://developers.facebook.com/docs/plugins/
          </LinkExternal>
        </p>
        <h4>Use of Twitter recommendation components</h4>
        <p>
          Our website employs components provided by Twitter. Twitter is a
          service of Twitter Inc., 795 Folsom St., Suite 600, San Francisco, CA
          94107, USA. Each time our website receives an access request equipped
          with a Twitter component, the component prompts your browser to
          download an image of this component from Twitter. Through this
          process, Twitter is informed precisely which page of our website is
          being visited. We have no control over the data that Twitter collects
          in the process, or over the extent of the data that Twitter collects.
          To the best of our knowledge, Twitter collects the URL of each website
          accessed as well as the IP address of the user, but does so solely for
          the purpose of displaying Twitter components. Additional information
          may be obtained from the Twitter data privacy policy, at:{' '}
          <LinkExternal to="http://twitter.com/privacy" rel="nofollow">
            http://twitter.com/privacy
          </LinkExternal>.
        </p>
        <p>
          You may change your data privacy settings in your account settings, at{' '}
          <LinkExternal to="http://twitter.com/account/settings" rel="nofollow">
            http://twitter.com/account/settings
          </LinkExternal>.
        </p>
        <h4>Use of Xing recommendation components</h4>
        <p>
          Our website employs components provided by the network XING.com. These
          components are a service of XING AG, Dammtorstraße 29-32, 20354
          Hamburg, Germany. Each time our website receives an access request
          equipped with a XING component, the component prompts your browser to
          download an image of this component from XING.<br /> To the best of
          our knowledge, XING does not store any personal information from the
          user obtained through accessing our website. XING also does not store
          IP addresses. In addition, no analysis of user activity occurs through
          the use of cookies in connection with the “XING Share-Button”.
          Additional information may be found in the data privacy provisions
          relating to the XING Share-Button, at:{' '}
          <LinkExternal
            to="https://www.xing.com/app/share?op=data_protection"
            rel="nofollow"
          >
            https://www.xing.com/app/share?op=data_protection
          </LinkExternal>
        </p>
        <h4>Use of LinkedIn recommendation components</h4>
        <p>
          Our website employs components provided by the network LinkedIn.
          LinkedIn is a service of LinkedIn Corporation, 2029 Stierlin Court,
          Mountain View, CA 94043, USA. Each time our website receives an access
          request equipped with a LinkedIn component, the component prompts your
          browser to download an image of this component from LinkedIn. Through
          this process, LinkedIn is informed exactly which page of our website
          is being accessed. By clicking the LinkedIn “recommend button“ while
          logged into your LinkedIn account, you can link content from our
          website to your LinkedIn profile. This allows LinkedIn to associate
          your visit to our site with your LinkedIn account.
          <br />
          We have no control over the data that LinkedIn collects thereby, nor
          over the extent of the data that LinkedIn collects. Nor do we have any
          knowledge of the content of data transferred to LinkedIn. Details on
          data collection by LinkedIn as well as your rights in this regard and
          your browser setting options may be obtained from the LinkedIn data
          privacy policy, which may be accessed at:<br />
          <LinkExternal
            to="http://www.linkedin.com/legal/privacy-policy"
            rel="nofollow"
          >
            http://www.linkedin.com/legal/privacy-policy
          </LinkExternal>
        </p>
        <h4>Use of YouTube components with enhanced data protection mode</h4>
        <p>
          On our website we use components (videos) of YouTube, LLC 901 Cherry
          Ave., 94066 San Bruno, CA, USA, a company belonging to Google Inc.,
          Amphitheatre Parkway, Mountain View, CA 94043, USA.
        </p>
        <p>
          To this end, we use the “ - enhanced data protection mode - ” option
          provided by YouTube.
        </p>
        <p>
          When you display a page that has an embedded video, a connection will
          be made to the YouTube server and the content will appear on the
          website via a communication to your browser.
        </p>
        <p>
          According to the information provided by YouTube, in “ - enhanced data
          protection mode -”, data is only transferred to the YouTube server, in
          particular which of our websites you have visited, if you watch the
          video. If you are logged onto YouTube at the same time, this
          information will be matched to your YouTube member account. You can
          prevent this from happening by logging out of your member account
          before visiting our website.
        </p>
        <p>
          Further information about data protection by YouTube is provided by
          Google under the following link:<br />
          <LinkExternal
            to="https://www.google.de/intl/de/policies/privacy/"
            rel="nofollow"
          >
            https://www.google.de/intl/de/policies/privacy/
          </LinkExternal>
        </p>
        <h4>Use of Vimeo components</h4>
        <p>
          We use Vimeo components on our site.&nbsp; Vimeo is a service of Vimeo
          LCC, 555 West 18th Street, New York, New York 10011, USA. Whenever you
          visit our website, which is equipped with such a component, this
          component causes the browser you are using to download a corresponding
          display of the Vimeo component. When you visit our site and are at the
          same time logged into Vimeo, Vimeo recognizes by means of the
          information collected by the component, which specific page you are
          visiting and assigns this information to your personal account at
          Vimeo. If, for example, you click on the “Play” button or make
          comments, this information will be conveyed to your personal user
          account at Vimeo and stored there. In addition, the information that
          you have visited our site will be passed on to Vimeo. This is done
          regardless of whether you click on the component/comment or not.
        </p>
        <p>
          If you want to prevent this transmission and storage of data by Vimeo
          about you and your behaviour on our website, you must log out of Vimeo
          before you visit our site. Vimeo’s Privacy Policy provides more
          detailed information concerning this, in particular regarding the
          collection and use of data by Vimeo:{' '}
          <LinkExternal to="https://vimeo.com/privacy">
            https://vimeo.com/privacy
          </LinkExternal>
        </p>
        <h4>Use of Slideshare</h4>
        <p>
          Our website employs components provided by Slideshare.com, a service
          of SlideShare Inc., 1 Montgomery St., Suite 1300, San Francisco, CA
          94104, USA and is integrated into our site using a so-called 2-click
          approach. No personal data is transmitted to Slideshare.com by merely
          accessing our website. Personal information is transferred to
          Slidewhare, Google Analytics and ComScore and stored in the US only
          when you manually activate Slideshare components. In addition, a
          cookie is placed on your browser. We have no control over data
          collected by Slideshare.com or their processing operations. Nor are we
          familiar with the full extent of the data collected, the purposes for
          which is collected or any storage periods which may be specified by
          Slideshare.com. Additional information is available at{' '}
          <LinkExternal to="http://www.slideshare.net/privacy" rel="nofollow">
            http://www.slideshare.net/privacy
          </LinkExternal>.
        </p>
        <p>
          ComScore (Corporate Headquarters Reston, 11950 Democracy Drive, Suite
          600, Reston, VA 20190, USA) stores the data thereby obtained by means
          of a &quot;user profile&quot;.&nbsp;Analysis of this &quot;user
          profile&quot; by ComScore is used to provide advertisements tailored
          to meet market demands and/or for purposes of market research. You are
          entitled to the right to deny consent to the compiling and storage of
          this user profile by ComScore. To exercise this right, contact
          comScore, Inc., at 11950 Democracy Drive, Suite 600, Reston, VA 20190,
          USA. Additional information on the purpose and extent of data
          collection and its processing by comScore can be found at{' '}
          <LinkExternal
            to="http://www.comscore.com/ger/Ueber_Uns/Datenschutz"
            rel="nofollow"
          >
            http://www.comscore.com/ger/Ueber_Uns/Datenschutz
          </LinkExternal>
        </p>
        <h4>Use of Pinterest</h4>
        <p>
          Our website employs the services of pinterest.com. Pinterest.com is a
          service of Pinterest, Inc., 808 Brannan St, San Francisco, CA 94103,
          USA. Through the “Pin it“ button integrated into our website,
          Pinterest is informed that you have accessed that particular page of
          our site. If you are logged into Pinterest, Pinterest can associate
          your visit to our site with your Pinterest account and thereby create
          a link to the data collected. Pinterest stores the data that is
          transferred through clicks on “Pin it“ buttons. You can find more
          information with respect to the purpose and extent of data collected,
          how it is processed and used as well as your rights in this regard and
          what settings you can use to protect your privacy by consulting the
          Pinterest data protection policy, which you can access at{' '}
          <LinkExternal to="http://pinterest.com/about/privacy/" rel="nofollow">
            http://pinterest.com/about/privacy/
          </LinkExternal>.
        </p>
        <p>
          To prevent Pinterest from associating your visit to our website to
          your Pinterest account, you must first log out of your Pinterest
          account before visiting our site.{' '}
        </p>
        <h4>Use of Getty Images</h4>
        <p>
          Our website has the option of displaying free images from the stock
          image archives belonging to Getty Images. These components are a
          service of Getty Images International, Block 4, Floor 2, Bracken
          Business Park, Bracken Road, Sandyford, Dublin 18, Ireland. Images
          incorporated in this manner are identified by the annotation “Getty
          Images“ within the incorporated image. You can find additional
          information at{' '}
          <LinkExternal
            to="http://www.gettyimages.de/Creative/Frontdoor/embed"
            rel="nofollow"
          >
            http://www.gettyimages.de/Creative/Frontdoor/embed
          </LinkExternal>
        </p>
        <p>
          A condition for the display of images from the Getty Images stock
          image archives on our website is that your IP address be transmitted
          to Getty Images. To the best of our knowledge, the IP address is used
          solely for the purpose of displaying the image on our website. We have
          no influence whatsoever should Getty Images store or exploit an IP
          address it collects for other purposes. You can find more information
          about the purpose and extent of data collection in the Getty Images
          data privacy policy, at{' '}
          <LinkExternal
            to="http://www.gettyimages.de/Corporate/PrivacyPolicy.aspx"
            rel="nofollow"
          >
            http://www.gettyimages.de/Corporate/PrivacyPolicy.aspx
          </LinkExternal>
        </p>
        <h4>Use of MailChimp</h4>
        <h5>Newsletter Consent</h5>
        <p>
          You will be asked to consent to the use of your personal data to
          receive our newsletter as follows:&nbsp;
        </p>
        <p>
          “I have read the privacy policy and I give my consent to data being
          processed by a service provider located in the United States”.
        </p>
        <p>
          We use the newsletter to provide you with regular updates about our
          offers. To receive our newsletter, you will need a valid email
          address. We will then check the email address entered to ensure that
          you are actually its owner or if its owner has agreed to receive our
          newsletter. By registering for the newsletter, we will save your IP
          address and date and time of registration. This will be used in case a
          third party misuses your email address to subscribe to our newsletter
          without your knowledge.&nbsp;
        </p>
        <p>
          We will not compare the data collected during newsletter registration
          with any other data that might be collected by other components of our
          site.&nbsp;
        </p>
        <h5>Newsletter by MailChimp&nbsp;</h5>
        <p>
          We use <strong>MailChimp</strong> to send our newsletter to our
          subscribers. <strong>MailChimp</strong> is a service provided by The
          Rocket Science Group, LLC, 512 Means Street, Suite 404, Atlanta, GA
          30318, USA.&nbsp;
        </p>
        <p>
          The data stored when you registered for the newsletter (email address,
          name, IP address, and time and date of registration) will be sent to a
          server operated by The Rocket Science Group in the United States and
          stored there in accordance with the EU-US Privacy Shield.&nbsp;
        </p>
        <p>
          Further information about the data protection offered by{' '}
          <strong>MailChimp</strong> can be found at:&nbsp;
        </p>
        <p>
          <LinkExternal to="http://mailchimp.com/legal/privacy/" rel="noopener">
            http://mailchimp.com/legal/privacy/
          </LinkExternal>
        </p>
        <p>
          Further information about the EU-US Privacy Shield can be found at:
        </p>
        <p>
          <LinkExternal
            to="https://www.bfdi.bund.de/DE/Europa_International/International/Artikel/EU-US_PrivacyShield_Daten%C3%BCbermittlungenUSA.html?nn=5217040"
            rel="noopener"
          >
            Die Bundesbeauftragte für den Datenschutz und die
            Informationsfreiheit
          </LinkExternal>
        </p>
        <p>
          <LinkExternal
            to="http://ec.europa.eu/justice/data-protection/international-transfers/eu-us-privacy-shield/index_en.htm"
            rel="noopener"
          >
            http://ec.europa.eu/justice/data-protection/international-transfers/eu-us-privacy-shield/index_en.htm
          </LinkExternal>
        </p>
        <p>
          You may cancel your newsletter subscription and revoke your consent to
          the storage of this data at any time with future effect. For
          instructions to take this step, please refer to the confirmation email
          and each newsletter.
        </p>
        <h5>Newsletter tracking</h5>
        <p>
          Our newsletter includes so-called web bugs that allow us to recognise
          if and when an email has been opened and which links in the email have
          been clicked by its recipient.
        </p>
        <p>
          This data is stored by us so that we can best align our newsletter to
          the wishes and interests of our subscribers. Accordingly, the data
          thus collected is used to send personalised newsletters to each
          recipient.
        </p>
        <p>
          You will be asked to consent to the use of your personal data as
          follows:
        </p>
        <p>
          “I agree that my data and my user responses will be stored
          electronically by newsletter tracking so that I can receive a
          personalised newsletter. The revocation of the consent to receive the
          newsletter constitutes a revocation of the consent for the tracking
          described above.”
        </p>
        <p>
          By revoking the consent to receive the newsletter, the consent to the
          aforementioned tracking is revoked.
        </p>
        <h4>The use of Instagram</h4>
        <p>
          We promote the service Instagram on our website. Instagram is a
          service of Instagram Inc. By means of the integrated &quot;Insta&quot;
          button on our page, Instagram receives the information that you have
          accessed the corresponding page of our website. If you are logged into
          Instagram, Instagram may assign the visit to our site to your
          Instagram account and link the data by this means. The data
          transmitted by clicking the &quot;Insta&quot; button is stored by
          Instagram. You can find more information regarding the purpose and
          scope of data collection, its processing and use, as well as your
          related rights and settings options for protecting your privacy in the
          Instagram data protection notice under{' '}
          <LinkExternal to="https://help.instagram.com/155833707900388">
            https://help.instagram.com/155833707900388
          </LinkExternal>.
        </p>
        <p>
          To prevent your visit to our site from being accessed by your
          Instagram account, you must log out of your Instagram account before
          visiting our site.
        </p>
        <h3>Information/Cancellation/Deletion</h3>
        <p>
          On the basis of the Federal Data Protection Act, you may contact us at
          no cost if you have questions relating to the collection, processing
          or use of your personal information, if you wish to request the
          correction, blocking or deletion of the same, or if you wish to cancel
          explicitly granted consent. Please note that you have the right to
          have incorrect data corrected or to have personal data deleted, where
          such claim is not barred by any legal obligation to retain this data.
        </p>
      </Post>
    </BlogContainer>
  )
}

export default DataPrivacy
