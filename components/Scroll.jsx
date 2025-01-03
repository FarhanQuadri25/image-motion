"use client";

// pages/index.js
import { motion } from "framer-motion";
import styles from "./Scroll.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Fixed Left Side */}
      <motion.div
        className={styles.left}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.img
          src="/postNew.jpg"
          alt="Fixed Image"
          className={styles.image}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
        />
      </motion.div>

      {/* Scrollable Right Side */}
      <div className={styles.right}>
        {[
          "Welcome to the Landing Page",
          "Another Section",
          "End of the Page",
          "New Page",
        ].map((title, index) => (
          <motion.div
            key={index}
            className={styles.section}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            <h1>{title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae ab molestiae pariatur velit sed omnis, aperiam porro
              totam voluptates expedita eum cumque officia hic tempora neque
              veniam explicabo ratione ipsam deleniti consectetur a aliquid! Ut
              deleniti repudiandae, animi consequatur quasi libero soluta ad
              nihil minus magni quam repellendus beatae quia aspernatur non sint
              quod dolore? Inventore cum, eveniet dicta enim ab sit nobis culpa
              rem modi a quasi placeat, harum natus quis! Nihil iusto hic
              laborum, ullam consequuntur itaque voluptas alias sunt soluta
              veniam non mollitia laboriosam asperiores error iste sequi. Porro
              nobis vero autem asperiores voluptatum accusantium quo neque
              dolorum aperiam soluta. Ratione quia eaque dolore repudiandae
              dolorum maxime incidunt, quis omnis veniam minus, voluptates amet
              voluptate error voluptatum eligendi voluptatibus sint aperiam
              excepturi, ea at quibusdam! Soluta nisi nam itaque adipisci est
              iusto doloremque exercitationem necessitatibus! Excepturi facilis
              minima nisi quos? Placeat, officiis amet enim ipsum maiores
              voluptatibus soluta? Veritatis nihil ea voluptatem, error aut quos
              animi iure, eligendi quod ex deleniti molestiae unde eius quo
              possimus. Architecto fugiat expedita neque dignissimos dolores
              voluptates minus recusandae nihil id molestiae, ad blanditiis
              praesentium placeat rerum reiciendis? Unde similique nostrum
              impedit ab ducimus fuga nisi sapiente doloremque molestiae
              excepturi amet distinctio iusto, iure sed et, animi modi incidunt
              id, non nulla? Deleniti, hic? Possimus optio cumque neque
              laudantium nam nihil ea quaerat nisi facere dolores id, et soluta
              nulla adipisci! Repellat possimus, et fuga nemo praesentium
              repudiandae labore obcaecati esse illo tenetur error consequuntur
              laboriosam neque eius, expedita mollitia nostrum! Quam dolores
              impedit dicta! Quis cupiditate quia autem soluta quasi omnis
              adipisci debitis, quas dignissimos neque ipsam? Error itaque
              aspernatur aut id soluta placeat eum mollitia impedit obcaecati
              voluptatem sint aperiam labore facere repudiandae, voluptas
              consectetur tempora consequuntur ab nemo architecto? Molestias
              ullam accusamus magnam, magni exercitationem qui non quam?
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
